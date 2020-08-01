import { Component, OnInit } from '@angular/core';
import { TransactionListDetailsItem } from '../../models/transaction-list';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {ListModel} from '../../../../features/api/models/containers.model';

@Component({
  templateUrl: './transactions-list-details.page.html',
  styleUrls: ['./transactions-list-details.page.sass'],
})
export class TransactionsListDetailsPage implements OnInit {
  items: TransactionListDetailsItem[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.refreshItems(id);
  }

  private refreshItems(id: string | null | undefined): void {
    if (id === undefined) {
      this.items = [];
      return;
    }
    this.http
      .get<ListModel<TransactionListDetailsItem>>(
        `http://127.0.0.1:8081/api/cashFlow/getCurrentGroupCashFlows/${id}`,
        {
          params: {
            offset: '0',
            limit: '100',
          },
        }
      )
      .subscribe((res) => {
        this.items = res.items;
      });
  }
}
