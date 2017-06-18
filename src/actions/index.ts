import * as types from '../constants/ActionTypes'

export const hitGoishi = (row: number, col: number) => ({type: types.HIT_GOISHI, row, col})
