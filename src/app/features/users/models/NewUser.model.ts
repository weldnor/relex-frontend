import { UserRole } from './user-role.model';

export interface NewUser {
  username: string;
  password: string;
  personalInfo: PersonalInfo;
  role: UserRole;

  createdBy?: number;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}
