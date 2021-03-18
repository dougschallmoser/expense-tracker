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

export interface ChildrenProps {
  children?: React.ReactNode
}

export enum ActionType {
  Get = 'GET_TRANSACTIONS',
  Delete = 'DELETE_TRANSACTION',
  Add = 'ADD_TRANSACTION',
  Error = 'TRANSACTION_ERROR'
}

export interface AddTransactionAction {
  type: ActionType.Add;
  payload: ITransaction
}

export interface DeleteTransactionAction {
  type: ActionType.Delete;
  payload: number
}

export type Action = AddTransactionAction | DeleteTransactionAction