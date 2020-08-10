import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExistingUser} from '../models/ExistingUser.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) {
  }

  getAllUsers(): Observable<ExistingUser[]> {
    return this.http.get<ExistingUser[]>(`${environment.api}/users/`);
  }

  getUserById(id: number): Observable<ExistingUser> {
    return this.http.get<ExistingUser>(`${environment.api}/users/${id}`);
  }

  deleteUserById(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/users/${id}`);
  }
}
