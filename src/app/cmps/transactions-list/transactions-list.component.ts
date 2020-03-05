import { Component, OnInit, Input } from '@angular/core';
import TransactionModel from 'src/app/models/transaction.model';

@Component({
  selector: 'transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

  @Input() moves: TransactionModel[] = []
  @Input() title: string = 'Your last 3 Transactions'
  numOfTransactionToDisplay: number = 3

  constructor() { }

  ngOnInit(): void {
    if (this.title !== 'Your last 3 Transactions') {
      this.numOfTransactionToDisplay = this.moves.length
    }
  }

}
