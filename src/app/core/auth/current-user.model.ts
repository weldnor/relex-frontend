import {Role} from './role.model';
import {ExistingUserModel} from '../../features/users/models/users.model';

export interface LoggedUser extends ExistingUserModel {
  readonly authenticated: true;

  hasRole(role: Role): boolean;
}

export interface Anonymous {
  readonly authenticated: false;

  hasRole(role: Role): boolean;
}

export type CurrentUser = LoggedUser | Anonymous;
