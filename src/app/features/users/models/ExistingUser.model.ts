import {UserRole} from './user-role.model';

export interface ExistingUser {
  id: number;
  username: string;
  userstatus: {
    isActive: boolean;
    isLocked: boolean;
  };
  personalInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  role: UserRole;
  createdAt: string;
  createdBy?: number;
}

