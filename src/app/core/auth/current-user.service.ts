import {APP_INITIALIZER, Injectable, Provider} from '@angular/core';
import {Anonymous, CurrentUser, LoggedUser} from './current-user.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Role} from './role.model';
import {switchMap, tap} from 'rxjs/operators';
import {ExistingUserModel} from '../../features/users/models/users.model';

export class AnonymousUserImpl implements Anonymous {
  readonly authenticated: false = false;

  hasRole(role: Role): boolean {
    return false;
  }
}

export class CurrentUserImpl implements LoggedUser {
  readonly authenticated: true;
  createdAt: string;
  createdBy: number;
  id: number;
  username: string;
  userstatus: { isActive: boolean; isLocked: boolean };

  hasRole(role: Role): boolean {
    return true; // FIXME
  }

  constructor(user: ExistingUserModel) {
    this.authenticated = true;
    this.createdAt = user.createdAt;
    this.createdBy = user.createdBy;
    this.id = user.id;
    this.username = user.username;
    this.userstatus = user.userstatus;
  }


}

// const a = new Subject();
// a.next(1);
// a.subscribe();

// new BehaviorSubject(undefined).getValue()

// new ReplaySubject(1).subscribe()

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  readonly user$ = new BehaviorSubject<CurrentUser>(
    new AnonymousUserImpl()
  );

  constructor(private http: HttpClient) {
    console.log('Current User created');
  }

  refreshCurrentUser(): Observable<void> {

    // example profile
    const profile: ExistingUserModel = {
      createdAt: '2020-08-03 18:26:03.886058',
      createdBy: 1,
      id: 2,
      username: 'example',
      userstatus: {isActive: true, isLocked: false}
    };

    // return this.http
    //   .get<ApiProfile | undefined>(
    //     `${environment.api}/api/public/profile`
    //   )
    //   .pipe(
    //     tap((profile) => {
    //       if (profile == undefined) {
    //         this.user$.next(new AnonymousUserImpl());
    //       } else {
    //         this.user$.next(new CurrentUserImpl(profile));
    //       }
    //     })
    //   ) as Observable<void>;

    return new Observable<ExistingUserModel | undefined>(
      subscriber => {
        subscriber.next(profile);
        subscriber.complete();
      }
    ).pipe(tap((p) => {
      if (p == undefined) {
        this.user$.next(new AnonymousUserImpl());
      } else {
        this.user$.next(new CurrentUserImpl(profile));
      }
    })) as unknown as Observable<void>;
  }

  login(username: string, password: string): Observable<void> {
    //   const form = new HttpParams({
    //     fromObject: {
    //       username,
    //       password
    //     }
    //   });
    //
    //   const headers = new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   });
    //
    //   return this.http
    //     .post<void>(
    //       `${environment.api}/auth/login`,
    //       form.toString(),
    //       {
    //         headers
    //       }
    //     )
    //     .pipe(switchMap(() => this.refreshCurrentUser()));

    return new Observable(observer => {
      observer.next();
    }).pipe(switchMap(() => this.refreshCurrentUser()));
  }

  logout(): Observable<void> {
    //   return this.http
    //     .post<void>(
    //       `${environment.api}/auth/logout`,
    //       undefined
    //     )
    //     .pipe(
    //       tap(() => this.user$.next(new AnonymousUserImpl()))
    //     );
    return Observable.create(observer => {
      observer.next();
    }).pipe(
      tap(() => this.user$.next(new AnonymousUserImpl()))
    );
  }
}

export function currentUserInitializerFactory(
  currentUserService: CurrentUserService
): () => Promise<void> {
  return () => {
    return currentUserService
      .refreshCurrentUser()
      .toPromise();
  };
}

export const CURRENT_USER_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: currentUserInitializerFactory,
  deps: [CurrentUserService],
  multi: true
};
