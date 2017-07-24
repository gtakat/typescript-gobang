import * as types from '../constants/ActionTypes'

export const hitGoishi = (row: number, col: number) => (
  {
    payload: {
      col,
      row,
    },
    type: types.HIT_GOISHI,
  }
)
