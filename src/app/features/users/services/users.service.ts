import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExistingUserModel} from '../models/users.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) {
  }

  getAllUsers(): Observable<ExistingUserModel[]> {
    return this.http.get<ExistingUserModel[]>(`${environment.api}/users/`);
  }

  getUserById(id: number): Observable<ExistingUserModel> {
    return this.http.get<ExistingUserModel>(`${environment.api}/users/${id}`);
  }
}
