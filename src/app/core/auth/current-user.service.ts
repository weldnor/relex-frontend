import {APP_INITIALIZER, Injectable, Provider} from '@angular/core';
import {BehaviorSubject, Observable, of, pipe} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {ExistingUser} from '../../features/users/models/existing-user.model';
import {environment} from '../../../environments/environment';
import {UserRole} from '../../features/users/models/user-role.model';
import {PersonalInfo} from '../../features/users/models/personal-info.model';
import {NewUser} from '../../features/users/models/new-user.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  // поток пользователей. undefined - пользователь не залогинен.
  readonly user$ = new BehaviorSubject<ExistingUser | undefined>(undefined);

  constructor(private http: HttpClient) {}

  refreshCurrentUser(): Observable<void> {
    return this.http
      .get<ExistingUser | undefined>(`${environment.api}/public/getCurrentUser`)
      .pipe(
        // FIXME если пользователь не авторизован, то код ответа - 404, из-за этого вызывается ошибка
        catchError((err) => of(undefined)),
        tap((profile) => {
          if (profile == undefined) {
            this.user$.next(undefined);
          } else {
            this.user$.next(profile);
          }
        })
      ) as Observable<void>;
  }

  login(username: string, password: string): Observable<void> {
    const data = {
      username,
      password,
    };

    return this.http
      .post<void>(`${environment.api}/auth/login`, data)
      .pipe(switchMap(() => this.refreshCurrentUser()));
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.api}/logout`, undefined).pipe(
      // FIXME бек кидает редирект на страницу с 404, из-за этого вызывается ошибка
      catchError((err) => of(undefined)),
      tap(
        (x) => {
          this.user$.next(undefined);
        },
        (e) => {
          this.user$.next(undefined);
        }
      )
    );
  }

  getId(): number {
    return this.user$.getValue().id;
  }

  createUser(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string
  ): Observable<void> {
    const role: UserRole = UserRole.USER;
    const personalInfo: PersonalInfo = {
      firstName,
      lastName,
      phone,
      email
    };
    const data: NewUser = {
      username,
      password,
      personalInfo,
      role
    };
    return this.http
      .post<void>(`${environment.api}/public/reg`, data)
      .pipe(switchMap(() => this.refreshCurrentUser()));
  }
}

export function currentUserInitializerFactory(
  currentUserService: CurrentUserService
): () => Promise<void> {
  return () => {
    return currentUserService.refreshCurrentUser().toPromise();
  };
}

export const CURRENT_USER_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: currentUserInitializerFactory,
  deps: [CurrentUserService],
  multi: true,
};
