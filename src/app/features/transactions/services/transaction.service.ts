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

  // TODO createdBy: number ?
  addTransaction(
    groupId: number,
    name: string,
    amount: number,
    categoryId: number
  ): Observable<void> {
    const data = {
      groupId,
      name,
      amount,
      categoryId
    };
    return this.http.post<void>(`${environment.api}/cashFlow`, data);
  }
}
