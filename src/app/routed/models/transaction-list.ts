export interface TransactionsList {
  id: string;
  name: string;
  createdBy: string;
  groupId: string;
  amount: string;
  categoryId: string;
  createdAt: string;
}

export interface Transaction {
  id: number;
  name: string;
  createdBy: string;
  groupId: number;
  amount: number;
  categoryId: number;
  createdAt: string;
}
