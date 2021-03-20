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
  GET = 'GET_TRANSACTIONS',
  DELETE = 'DELETE_TRANSACTION',
  ADD = 'ADD_TRANSACTION',
  ERROR = 'TRANSACTION_ERROR'
}

export interface AddTransactionAction {
  type: ActionType.ADD;
  payload: ITransaction
}

export interface DeleteTransactionAction {
  type: ActionType.DELETE;
  payload: number
}

export type Action = AddTransactionAction | DeleteTransactionAction