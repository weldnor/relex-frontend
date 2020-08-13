import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TransactionService} from '../../../../features/transactions/services/transaction.service';
import {Category} from '../../../../features/transactions/models/category.model';

interface FormValue {
  name: string;
  amount: number;
  categoryId: number;
}


@Component({
  templateUrl: './add-expense.dialog.html',
  styleUrls: ['./add-expense.dialog.sass']
})
export class AddExpenseDialog implements OnInit {


  error = false;
  private groupId?: number;

  // HACK
  Category = Category;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly transactionService: TransactionService,
    private readonly dialogRef: MatDialogRef<AddExpenseDialog, undefined>,
  ) {
  }

  ngOnInit(): void {
    this.groupId = this.data;
  }

  handleSaveClick(form: FormValue): void {
    this.transactionService.addTransaction(this.groupId, form.name, form.amount, form.categoryId).subscribe(
      value => {
        this.dialogRef.close();
      },
      error => {
        this.error = true;
      },
    );
  }

}
