import { Component, OnInit } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';

import { ContactService } from '../../services/contact-service/contact-service'
import { Observable } from 'rxjs';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})

export class ContactPageComponent implements OnInit {

  contacts$: Observable<ContactModel[]>;

  constructor(public contactService: ContactService) { }

  ngOnInit() {

    //when this page loads
    //call the contactService to get the contacts from the mocked server
    //then, subscribe to any changes made in the data to re-render the list on every change
    //this approach requires use of ngOnDestroy to unsubscribe !

    // this.contactService.loadContacts();
    // this.contactService.contacts$.subscribe((contacts) => {
    //   this.contacts = contacts
    // })

    //different approach (and more convenient)
    this.contactService.loadContacts(null);
    this.contacts$ = this.contactService.contacts$
  }

  onFilter(filterBy) {
    this.contactService.loadContacts(filterBy);
  }

}


