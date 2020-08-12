import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {UserRole} from '../models/user-role.model';
import {map} from 'rxjs/operators';
import {ExistingUser} from '../models/existing-user.model';

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

  createUserAsAdmin(
    username: string,
    password: string,
    role: UserRole,
    firstName: string,
    lastName: string,
    phone: string,
    email: string
  ): Observable<void> {
    const data = {
      username,
      password,
      role,
      personalInfo: {
        firstName,
        lastName,
        phone,
        email
      }
    };
    return this.http
      .post<void>(`${environment.api}/public/reg`, data);
  }

  editUserAsAdmin(
    id: number,
    password: string,
    role: UserRole,
    isActive: boolean,
    isLocked: boolean,
    firstName: string,
    lastName: string,
    phone: string,
    email: string
  ): Observable<void> {
    const data = {
      password,
      role,
      status: {
        isActive,
        isLocked
      },
      personalInfo: {
        firstName,
        lastName,
        phone,
        email
      }
    };
    return this.http
      .put<void>(`${environment.api}/users/${id}`, data);
  }

  editUserAsUser(
    id: number,
    password: string,
    role: UserRole,
    firstName: string,
    lastName: string,
    phone: string,
    email: string
  ): Observable<void> {
    const data = {
      password,
      role,
      status: {
        isActive: true,
        isLocked: false
      },
      personalInfo: {
        firstName,
        lastName,
        phone,
        email
      }
    };
    return this.http
      .put<void>(`${environment.api}/users/${id}`, data);
  }

  getAdmins(): Observable<ExistingUser[]> {
    return this.getAllUsers().pipe(
      map(
        (users) => {
          return users.filter(user => user.role === UserRole.ADMIN);
        }
      )
    );
  }

  deleteMember(userId: number, groupId: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.api}/groups/${groupId}/users/${userId}`);
  }
}
