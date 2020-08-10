import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../features/users/services/users.service';
import {ExistingUser} from '../../../../features/users/models/ExistingUser.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.sass']
})
export class HomePage implements OnInit {

  users?: ExistingUser[] = undefined;
  error?: string = undefined;

  constructor(private readonly usersService: UserService) {
  }

  ngOnInit(): void {
 /*   this.usersService.getAllUsers().subscribe(
      value => this.users = value
    ); */
  }

}
