// import {createStore, combineReducers} from 'redux'
import * as Redux from 'redux'
import * as ReduxActions from 'redux-actions'
import * as types from '../constants/ActionTypes'
import judgement from '../Judgement'
import sound from '../Sound'

interface IAppState {
  readonly current: string
  readonly squares: Array<Array<string|null>>
  readonly step: number
  readonly winner: (string|null)
}

interface IAppData {
  row: number
  col: number
}

const initialState = (): IAppState => {
  const squares = Array(19)
  for (let i = 0; i < squares.length; i++) {
    squares[i] = Array(19).fill(null)
  }
  return {
    current: 'black',
    squares,
    step: 1,
    winner: null,
  }
}

const reducer = (state: IAppState = initialState(), action: ReduxActions.Action<IAppData>): IAppState => {
  switch (action.type) {
  case types.HIT_GOISHI: {
    // game end check
    if (state.winner) {
      return state
    }

    if (!action.payload) {
      return state
    }

    // check valid hit
    if (!judgement.validatesHit(state, action.payload.row, action.payload.col)) {
      return state
    }

    // sound play
    sound.play(state.current)

    // hit goishi
    const newSquares = state.squares.slice(0)
    newSquares[action.payload.row][action.payload.col] = state.current
    const currentPlayer = state.current
    const nextPlayer = state.current === 'black' ? 'white' : 'black'

    // check winner
    const isWin = judgement.calculateWinner(state.squares, currentPlayer, action.payload.row, action.payload.col)
    const newWinner = isWin ? currentPlayer : null

    const newState = Object.assign({}, state, {
      current: nextPlayer,
      squares: newSquares,
      step: state.step + 1,
      winner: newWinner,
    })

    return newState
  }
  default:
    break
  }
  return state
}

// export default reducer
export default Redux.createStore(reducer)
