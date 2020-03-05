import { Component, OnInit, Input } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user-service/user-service.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'bit-transfer',
  templateUrl: './bit-transfer.component.html',
  styleUrls: ['./bit-transfer.component.scss']
})
export class BitTransferComponent implements OnInit {

  @Input() contact: ContactModel
  @Input() userCoins: number
  amount: number
  bitTransferForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    debugger
    this.bitTransferForm = new FormGroup({
      'amount': new FormControl('', [
      ], [this.userDoesntHaveEnoughMoney]),
    }, { validators: [], asyncValidators: [] });
  }

  onSubmit(value) {
    debugger
    this.userService.addMove(this.contact, this.amount)
    //do not enable any transfer if user doesn't have enough money!
    //make it appear with validation!
  }

  userDoesntHaveEnoughMoney(control: FormControl): Observable<ValidationErrors | null> {
    debugger
    //check if the current user has enough money and return a new observable with the answer
    return new Observable((observable) => {
      if ((this.userCoins - this.amount > 0) && (this.amount > 0)) {
        observable.next({ 'amount': true })
      } else {
        observable.next(null)
      }
    })
  }
}