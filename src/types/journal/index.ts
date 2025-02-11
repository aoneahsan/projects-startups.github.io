export interface IJournal {
  id?: string;
  userId?: string;

  goodThings?: string[];
  challengingThings?: string[];
  toRememberThisDayFor?: string;

  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
