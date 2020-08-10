import { UserRole } from './user-role.model';

export interface NewUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: UserRole;

  createdBy?: number;
}
