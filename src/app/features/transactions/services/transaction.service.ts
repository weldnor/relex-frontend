import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Transaction} from '../models/transaction.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private readonly http: HttpClient) {
  }

  getAllTransactions(groupId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.api}/cashFlow/getCurrentGroupCashFlows/${groupId}`);
  }
}
