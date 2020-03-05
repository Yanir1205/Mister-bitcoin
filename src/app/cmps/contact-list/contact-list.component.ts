import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: ContactModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
