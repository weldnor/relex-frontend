import {Component, OnInit} from '@angular/core';
import {ExistingUser} from './features/users/models/users.model';
import {CurrentUserService} from './core/auth/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  user: ExistingUser;

  constructor(private readonly currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
    this.currentUserService.user$.subscribe(user => {
      this.user = user;
    });
  }
}
