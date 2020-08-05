import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../features/users/services/users.service';
import {ExistingUserModel} from '../../../features/users/models/users.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.sass']
})
export class HomePage implements OnInit {

  users?: ExistingUserModel[] = undefined;
  error?: string = undefined;

  constructor(private readonly usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(
      value => this.users = value
    );
  }

}
