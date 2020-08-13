import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExistingGroup} from '../../../../features/groups/models/existing-group.model';
import {GroupService} from '../../../../features/groups/services/groups.service';
import {Transaction} from '../../../../features/transactions/models/transaction.model';
import {TransactionService} from '../../../../features/transactions/services/transaction.service';
import {MatDialog} from '@angular/material/dialog';
import {AddExpenseDialog} from '../../components/add-expense/add-expense.dialog';
import {AddIncomeDialog} from '../../components/add-income/add-income.dialog';

@Component({
  templateUrl: './group-overview.page.html',
  styleUrls: ['./group-overview.page.sass']
})
export class GroupOverviewPage implements OnInit {

  group?: ExistingGroup;

  public results =
    [{name: 'd', value: 100000}, {name: 'e', value: 100000}, {name: 'f', value: 100000}, {name: 'b', value: 100000}, {
      name: 'c',
      value: 100000
    }];

  transactions?: Transaction[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly groupService: GroupService,
    private readonly transactionService: TransactionService,
    private readonly dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.parent.snapshot.paramMap.get('id'));
    this.groupService.getGroupById(id).subscribe(group => {
      this.group = group;
    });
    this.transactionService.getAllTransactions(id).subscribe(
      transactions => {
        this.transactions = transactions;
      });
  }

  handleAddExpense(): void {
    this.dialog.open(AddExpenseDialog, {data: this.group.id}).afterClosed().subscribe(() => {
      //this.refreshList();
    });
  }

  handleAddIncome() {
    this.dialog.open(AddIncomeDialog, {data: this.group.id}).afterClosed().subscribe(() => {
      //this.refreshList();
    });
  }
}
