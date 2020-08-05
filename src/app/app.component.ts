import {Component, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExistingUserModel} from './features/users/models/users.model';
import {UsersService} from './features/users/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  users?: ExistingUserModel[] = undefined;

  constructor(private readonly userService: UsersService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh(): void {
    this.userService.getAllUsers().subscribe(
      value => this.users = value
    );
  }
}
