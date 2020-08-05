export interface ExistingUserModel {
  id: number;
  username: string;
  userstatus: {
    isActive: boolean;
    isLocked: boolean;
  };
  createdAt: number;
  createdBy?: number;
}

