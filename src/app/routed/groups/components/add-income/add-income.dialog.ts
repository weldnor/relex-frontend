import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TransactionService} from '../../../../features/transactions/services/transaction.service';

interface FormValue {
  name: string;
  amount: number;
}

@Component({
  templateUrl: './add-income.dialog.html',
  styleUrls: ['./add-income.dialog.sass']
})
export class AddIncomeDialog implements OnInit {

  error = false;
  private groupId?: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data,
    private readonly transactionService: TransactionService,
    private readonly dialogRef: MatDialogRef<AddIncomeDialog, undefined>,
  ) {
  }

  ngOnInit(): void {
    this.groupId = this.data;
  }

  handleSaveClick(form: FormValue): void {
    const categoryId = 12;
    this.transactionService.addTransaction(this.groupId, form.name, form.amount, categoryId).subscribe(
      value => {
        this.dialogRef.close();
      },
      error => {
        this.error = true;
      },
    );
  }
}
