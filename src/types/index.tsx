export interface ITransaction {
  subject: string,
  amount: string,
  id: number
}

export interface ApplicationState {
  transactions: ITransaction[],
  error?: string,
  addTransaction?(transaction: ITransaction): void,
  deleteTransaction?(id: number): void,
  loading: boolean
}