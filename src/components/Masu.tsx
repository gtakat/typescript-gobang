import * as React from 'react'
import { AppStateSquares, IAppState } from '../constants/StateTypes'
import Goishi from './Goishi'

export interface IMasuProps {
  squares: AppStateSquares
  col: number
  row: number
}

export interface IMasuOwnProps {
  squares?: AppStateSquares  // for test props
  col: number
  row: number
}

export interface IMasuDispacher {
  hitGoishi: (row: number, col: number) => void
}

export class Masu extends React.Component<IMasuProps & IMasuDispacher, IAppState> {
  public render(): JSX.Element {
    const color: (string|null) = this.props.squares[this.props.row][this.props.col]
    const goishi: (JSX.Element|null) = color ? <Goishi color={color} /> : null
    return (
      <div className="App-masu"
          id={ `App-masu-${this.props.row}-${this.props.col}` }
          onClick={() => this.props.hitGoishi(this.props.row, this.props.col)}>
        {goishi}
      </div>
    )
  }
}
