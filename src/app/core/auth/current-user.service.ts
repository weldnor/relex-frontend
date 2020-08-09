import {APP_INITIALIZER, Injectable, Provider} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {ExistingUser} from '../../features/users/models/users.model';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  // поток пользователей. undefined - пользователь не залогинен.
  readonly user$ = new BehaviorSubject<ExistingUser | undefined>(
    undefined
  );

  constructor(private http: HttpClient) {
  }

  refreshCurrentUser(): Observable<void> {
    return this.http
      .get<ExistingUser | undefined>(
        `${environment.api}/public/getCurrentUser`
      )
      .pipe(
        // FIXME если пользователь не авторизован, то код ответа - 404, из-за этого вызывается ошибка
        catchError(err => of(undefined)),
        tap(
          (profile) => {
            if (profile == undefined) {
              this.user$.next(undefined);
            } else {
              this.user$.next(profile);
            }
          })) as Observable<void>;
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
    return this.http
      .post<void>(
        `${environment.api}/logout`,
        undefined
      )
      .pipe(
        // FIXME бек кидает редирект на страницу с 404, из-за этого вызывается ошибка
        catchError(err => of(undefined)),
        tap(x => {
          this.user$.next(undefined);
        }, e => {
          this.user$.next(undefined);
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
