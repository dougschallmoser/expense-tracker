export interface ITransaction {
  subject: string,
  amount: string,
  id: number
}

export interface ApplicationState {
  transactions: ITransaction[],
  error?: string,
  addTransaction?: any,
  deleteTransaction?: any,
  loading: boolean
}

export interface StateAction {
  type: string;
  payload: any;
}

export interface ChildrenProps {
  children: React.ReactNode
}

export enum ActionType {
  Get = 'GET_TRANSACTIONS',
  Delete = 'DELETE_TRANSACTION',
  Add = 'ADD_TRANSACTION',
  Error = 'TRANSACTION_ERROR'
}