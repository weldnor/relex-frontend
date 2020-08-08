import {ExistingUserModel} from '../../features/users/models/users.model';

export interface LoggedUser extends ExistingUserModel {
  readonly authenticated: true;

  hasRole(role: string): boolean;
}

export interface Anonymous {
  readonly authenticated: false;

  hasRole(role: string): boolean;
}

export type CurrentUser = LoggedUser | Anonymous;
