import {HttpClient} from '@angular/common/http';
import {ExistingGroup} from '../../groups/models/existing-group.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor(private readonly http: HttpClient) {
  }

  getAllGroups(): Observable<ExistingGroup[]> {
    return this.http.get<ExistingGroup[]>(`${environment.api}/groups/`);
  }
}
