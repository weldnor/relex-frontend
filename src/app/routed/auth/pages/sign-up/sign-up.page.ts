import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../../../core/auth/current-user.service';
import { Router } from '@angular/router';

interface SignUpFormData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

@Component({
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.sass'],
})
export class SignUpPage implements OnInit {
  error = false;

  constructor(
    private readonly currentUserService: CurrentUserService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}
  handleFormSubmit(value: SignUpFormData): void {
    console.log(value);
    this.error = false;
    this.currentUserService
      .createUser(
        value.username,
        value.password,
        value.firstName,
        value.lastName,
        value.phone,
        value.email
      )
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error', error);
          this.error = true;
        }
      );
  }
}
