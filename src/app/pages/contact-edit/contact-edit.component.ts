import { Component, OnInit, OnDestroy } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact-service/contact-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/directives/forbidden-name.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  editableContact: ContactModel
  contactForm: FormGroup;
  paramSubscriber: Subscription
  contactSubscriber: Subscription

  constructor(private route: ActivatedRoute, public contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.editableContact = this.contactService.getEmptyContact();
    this.paramSubscriber = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        //edit mode:
        this.contactSubscriber = this.contactService.getContactById(id).subscribe(contact => {
          this.editableContact.name = contact.name
          this.editableContact.email = contact.email
          this.editableContact.phone = contact.phone
          this.editableContact._id = contact._id
        })
      }
    })
  }
  ngOnDestroy() {
    this.paramSubscriber.unsubscribe()
    this.contactSubscriber?.unsubscribe()
  }

  goBack() {
    if (this.editableContact._id) {
      this.router.navigate(['/contact', this.editableContact._id])
    } else {
      this.router.navigate(['/contact'])
    }
  }

  saveContact() {
    //any service use shall be done using subscribe. the navigate shall happen only after the service has finished its job!
    this.contactService.saveContact(this.editableContact)
    this.router.navigate(['contact'])
  }

  delete() {
    //show the delete button only on edit mode!
    this.contactService.deleteContact(this.editableContact._id)
    this.router.navigate(['contact'])
  }

  inputChange(event) {
    const field = event.target.name
    const value = event.target.value
    this.editableContact[field] = value
  }

}