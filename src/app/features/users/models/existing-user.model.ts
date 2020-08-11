import {UserRole} from './user-role.model';
import {PersonalInfo} from './personal-info.model';
import {UserStatus} from './user-status.model';

export interface ExistingUser {
  id: number;
  username: string;
  userstatus: UserStatus;
  personalInfo: PersonalInfo;
  role: UserRole;
  createdAt: string;
  createdBy?: number;
}
