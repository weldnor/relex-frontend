import { UserRole } from './user-role.model';
import {PersonalInfo} from './personal-info.model';

export interface NewUser {
  username: string;
  password: string;
  personalInfo: PersonalInfo;
  role: UserRole;
  createdBy?: number;
}


