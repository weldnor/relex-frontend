import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransactionsList} from '../../models/transaction-list';
import {ListModel} from '../../../../features/api/models/containers.model';


@Component({
  templateUrl: './transaction-list.page.html',
  styleUrls: ['./transaction-list.page.sass']
})
export class TransactionListPage implements OnInit {
  items: TransactionsList[];

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.refreshLists();
  }

  private refreshLists(): void {
    this.http
      .get<ListModel<TransactionsList>>(
        'http://127.0.0.1:8081/api/cashFlow/getCurrentGroupCashFlows/1',
        {
          params: {
            offset: '0',
            limit: '100'
          }
        }
      )
      .subscribe((result) => {
        this.items = result.items;
      });
  }

}
