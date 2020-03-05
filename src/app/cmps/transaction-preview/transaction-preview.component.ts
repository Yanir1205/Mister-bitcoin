import { Component, OnInit, Input } from '@angular/core';
import TransactionModel from 'src/app/models/transaction.model';

@Component({
  selector: 'transaction-preview',
  templateUrl: './transaction-preview.component.html',
  styleUrls: ['./transaction-preview.component.scss']
})
export class TransactionPreviewComponent implements OnInit {

  @Input() move: TransactionModel
  date
  constructor() { }

  ngOnInit(): void {
    this.date = new Date(this.move.at).toLocaleDateString() + ' ' + new Date(this.move.at).toLocaleTimeString()
  }

}
