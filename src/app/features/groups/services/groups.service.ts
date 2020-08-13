import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ExistingGroup} from '../models/existing-group.model';
import {ExistingUser} from '../../users/models/existing-user.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private readonly http: HttpClient) {
  }

  getAllGroups(): Observable<ExistingGroup[]> {
    return this.http.get<ExistingGroup[]>(`${environment.api}/groups/`);
  }

  deleteGroupById(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api}/groups/${id}`);
  }

  createGroup(groupName: string, groupDescription: string, groupAdminId: number): Observable<void> {
    const data = {
      groupName,
      description: groupDescription,
      groupAdminId
    };

    return this.http.post<void>(`${environment.api}/groups/`, data);
  }

  getGroupById(id: number): Observable<ExistingGroup> {
    return this.http.get<ExistingGroup>(`${environment.api}/groups/${id}`);
  }

  getGroupMembers(id: number): Observable<ExistingUser[]> {
    return this.http.get<ExistingUser[]>(`${environment.api}/groups/getMembers/${id}`);
  }

  deleteGroupMember(groupId: number, userId: number): Observable<void> {
    const data = {
      groupId,
      userId
    };
    return this.http.request<void>('delete', `${environment.api}/groups/deleteMember`, {body: data});
  }

  getUserGroups(userId: number): Observable<ExistingGroup[]> {
    return this.http.get<ExistingGroup[]>(`${environment.api}/groups/userGroups/${userId}`);
  }

  joinToGroup(joinCode: string): Observable<void> {
    return this.http.request<void>('post', `${environment.api}/groups/joinToGroup/${joinCode}`);
  }

  // TODO
  // updateGroup(id: number): Observable<ExistingUser[]> {
  //   return this.http.put<ExistingUser[]>(`${environment.api}/groups/${id}/users`);
  // }
}
