import * as ReduxActions from 'redux-actions'
import { HIT_GOISHI, IAppActionData } from '../constants/ActionTypes'

export const hitGoishi = (row: number, col: number): ReduxActions.Action<IAppActionData> => (
  {
    payload: {
      col,
      row,
    },
    type: HIT_GOISHI,
  }
)
