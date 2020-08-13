import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Transaction} from '../models/transaction.model';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {categoryIdToString} from '../mappers/category.mapper';

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

  getExpenseStatistic(groupId: number): Observable<any> {
    return this.getAllTransactions(groupId).pipe(
      map(transactions => {
        const categoryIdAndSum = new Map<number, number>();

        for (const transaction of transactions) {
          const {amount, categoryId} = transaction;
          if (categoryId === 12) {
            continue; // убераем доходы
          }
          if (categoryIdAndSum.has(categoryId)) {
            categoryIdAndSum.set(categoryId, categoryIdAndSum.get(categoryId) + amount);
          } else {
            categoryIdAndSum.set(categoryId, amount);
          }
        }

        return Array.from(categoryIdAndSum.entries()).map(
          item => {
            return {name: categoryIdToString(item[0]), value: item[1]};
          }
        );

      }),
    );
  }
}
