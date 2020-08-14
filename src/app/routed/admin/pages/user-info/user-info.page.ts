import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';
import {UserService} from '../../../../features/users/services/users.service';
import {UserRole} from '../../../../features/users/models/user-role.model';

interface FormValue {
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  isLocked: boolean;
}

@Component({
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.sass']
})
export class UserInfoPage implements OnInit {

  error = false;
  user?: ExistingUser;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  handleSaveClick(value: FormValue): void {
    this.userService
      .editUserAsAdmin(
        this.user.id,
        value.password,
        value.role,
        value.isActive,
        value.isLocked,
        value.firstName,
        value.lastName,
        value.phone,
        value.email
      )
      .subscribe(
        () => {
          console.log('changes had been submitted');
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }

  handleGoBack(): void {
    this.router.navigate(['/admin/users']);
  }
}
