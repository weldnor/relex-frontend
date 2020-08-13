import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.sass']
})
export class TransactionListComponent implements OnInit {
  items: Tran[];

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
