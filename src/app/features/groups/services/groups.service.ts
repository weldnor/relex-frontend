import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ExistingGroup} from '../models/groups.model';
import {HttpClient} from '@angular/common/http';

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

  getGroupMembers(id: number): Observable<ExistingGroup> {
    return this.http.get<ExistingGroup>(`${environment.api}/groups/${id}`);
  }
}
