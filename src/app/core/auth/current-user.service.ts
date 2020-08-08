import {APP_INITIALIZER, Injectable, Provider} from '@angular/core';
import {Anonymous, CurrentUser, LoggedUser} from './current-user.model';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {ExistingUserModel} from '../../features/users/models/users.model';
import {environment} from '../../../environments/environment';

export class AnonymousUserImpl implements Anonymous {
  readonly authenticated: false = false;

  hasRole(role: string): boolean {
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
  personalInfo: {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
  };
  role: string;

  hasRole(role: string): boolean {
    return role === this.role; // FIXME
  }

  constructor(user: ExistingUserModel) {
    this.authenticated = true;
    this.createdAt = user.createdAt;
    this.createdBy = user.createdBy;
    this.id = user.id;
    this.username = user.username;
    this.userstatus = user.userstatus;
    this.role = user.role;
    this.personalInfo = user.personalInfo;
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
  }

  refreshCurrentUser(): Observable<void> {

    // example profile
    // const profile: ExistingUserModel = {
    //   id: 1,
    //   username: 'John1',
    //   role: 'ADMIN',
    //   personalInfo: {
    //     firstName: 'string',
    //     lastName: 'string',
    //     phone: '343451',
    //     email: 's64n1g@mail',
    //   },
    //   createdAt: '2020-08-03 18:26:03.886058',
    //   userstatus: {isActive: true, isLocked: false}
    // };
    return this.http
      .get<ExistingUserModel | undefined>(
        `${environment.api}/public/getCurrentUser`
      )
      .pipe(
        catchError(err => {
          return of(undefined);
        }),
        tap((profile) => {
          console.log(profile);
          if (profile == undefined) {
            this.user$.next(new AnonymousUserImpl());
          } else {
            this.user$.next(new CurrentUserImpl(profile as ExistingUserModel)); // FIXME?
          }
        }, err => {
          console.log(err);
          this.user$.next(new AnonymousUserImpl());
        })
      ) as Observable<void>;
  }

  login(username: string, password: string): Observable<void> {

    const data = {
      username,
      password
    };

    return this.http
      .post<void>(
        `${environment.api}/auth/login`,
        data
      )
      .pipe(switchMap(() => this.refreshCurrentUser()));
  }

  logout(): Observable<void> {
    console.log(`${environment.api}/logout`);
    return this.http
      .post<void>(
        `${environment.api}/logout`,
        undefined
      )
      .pipe(
        tap(x => {
          this.user$.next(new AnonymousUserImpl());
        }, e => {
          this.user$.next(new AnonymousUserImpl()); // FIXME
        })
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
