export interface DbItem {
  description: string;
  creationDate: string;
  dueDate: string;
}

export interface DbItemWithId extends DbItem {
  id: number;
}
