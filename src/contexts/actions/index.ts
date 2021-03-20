import { ActionType } from '../action-types';
import { ITransaction } from '../../types';

interface AddTransactionAction {
  type: ActionType.ADD;
  payload: ITransaction;
}

interface DeleteTransactionAction {
  type: ActionType.DELETE;
  payload: number;
}

export type Action = AddTransactionAction | DeleteTransactionAction