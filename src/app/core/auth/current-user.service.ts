import {Injectable} from '@angular/core';
import {Anonymous, CurrentUser, LoggedUser} from './current-user.model';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Role} from './role.model';

interface ApiProfile {
  username: string;
  roles: [Role];
}

export class AnonymousUserImpl implements Anonymous {
  readonly authenticated: false = false;

  hasRole(role: Role): boolean {
    return false;
  }
}

export class CurrentUserImpl implements LoggedUser {
  readonly authenticated: true = true;
  readonly username = this.profile.username;

  private roles: Set<Role> = new Set(this.profile.roles);

  constructor(readonly profile: ApiProfile) {
  }

  hasRole(role: Role): boolean {
    return this.roles.has(role);
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

  // refreshCurrentUser(): Observable<void> {
  //   return this.http
  //     .get<ApiProfile | undefined>(
  //       `${environment.api}/api/public/profile`
  //     )
  //     .pipe(
  //       tap((profile) => {
  //         if (profile == undefined) {
  //           this.user$.next(new AnonymousUserImpl());
  //         } else {
  //           this.user$.next(new CurrentUserImpl(profile));
  //         }
  //       })
  //     ) as Observable<void>;
  // }
}


