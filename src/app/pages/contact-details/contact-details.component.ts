import { Component, OnInit, OnDestroy } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact-service/contact-service';
import UserModel from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user-service/user-service.service';
import TransactionModel from 'src/app/models/transaction.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  contact: ContactModel
  user: UserModel
  moves: TransactionModel[]
  contactSubscriber: Subscription
  userSubscriber: Subscription
  title: string = 'Your recent transactions'

  constructor(private route: ActivatedRoute, public contactService: ContactService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    //on every change on the id in the url - re-render the details page
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.contactSubscriber = this.contactService.getContactById(id).subscribe(contact => {
        this.contact = contact
      });
      this.userSubscriber = this.userService.user$.subscribe(user => {
        this.user = user
        this.moves = this.user.moves.filter(move => {
          return move.toId === this.contact._id
        })
      })
    })

  }

  ngOnDestroy(): void {
    this.contactSubscriber.unsubscribe();
    this.userSubscriber.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/contact'])
  }

  editContact() {
    this.router.navigate(['/contact/edit', this.contact._id])
  }

}