export interface ExistingUserModel {
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
  role: string;
  createdAt: string;
  createdBy?: number;
}

