import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Transaction} from '../../../../features/transactions/models/transaction.model';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.sass']
})
export class TransactionListComponent implements OnInit {
  columns = ['name', 'createdBy', 'categoryId', 'amount', 'createdAt'];

  @Input()
  transactions: Transaction[];

  @Output()
  transactionInfo = new EventEmitter<Transaction>();


  constructor() {
  }

  ngOnInit(): void {
  }

  // handleInfo(transaction: Transaction) {
  //   this.transactionInfo.emit(transaction);
  // }
}
