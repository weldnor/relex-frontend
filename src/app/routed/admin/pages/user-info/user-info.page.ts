import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExistingUser} from '../../../../features/users/models/existing-user.model';
import {UserService} from '../../../../features/users/services/users.service';

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
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  handleSaveClick(value: any): void {

  }
}
