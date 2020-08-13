import {Component, OnInit} from '@angular/core';
import {AddExpenseDialog} from '../../components/add-expense/add-expense.dialog';
import {AddIncomeDialog} from '../../components/add-income/add-income.dialog';
import {Transaction} from '../../../../features/transactions/models/transaction.model';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {TransactionService} from '../../../../features/transactions/services/transaction.service';
import {MatDialog} from '@angular/material/dialog';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';

@Component({
  templateUrl: './group-transactions.page.html',
  styleUrls: ['./group-transactions.page.sass']
})
export class GroupTransactionsPage implements OnInit {
  group?: ExistingGroup;
  transactions?: Transaction[];
  private groupId: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly groupService: GroupService,
    private readonly transactionService: TransactionService,
    private readonly dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.groupId = Number(this.route.parent.snapshot.paramMap.get('id'));
    this.groupService.getGroupById(this.groupId).subscribe(group => {
      this.group = group;
    });
    this.refreshList();
  }

  refreshList(): void {
    this.transactionService.getAllTransactions(this.groupId).subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  handleAddExpense(): void {
    this.dialog.open(AddExpenseDialog, {data: this.group.id}).afterClosed().subscribe(() => {
      this.refreshList();
    });
  }


  handleAddIncome(): void {
    this.dialog.open(AddIncomeDialog, {data: this.group.id}).afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
}
