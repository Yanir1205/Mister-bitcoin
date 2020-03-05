import { Component, OnInit, Input } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact: ContactModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  contactClick() {
    this.router.navigate(['/contact' , this.contact._id])
  }

}
