import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user-service.service';
import { Observable } from 'rxjs';
import UserModel from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/directives/forbidden-name.directive';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  user$: Observable<UserModel>
  userNameForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userNameForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        forbiddenNameValidator(/\d/),// <-- Here's how you pass in the custom validator.
      ]),
    }, { validators: [], asyncValidators: [] });
  }

  onSubmit(value) {
    this.userService.signup(value.name)
    this.user$ = this.userService.user$
    if (this.user$) {
      this.userNameForm.patchValue({
        name: '',
      });
      this.router.navigate(['home'])
    }
  }

}