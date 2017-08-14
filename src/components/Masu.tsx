import * as React from 'react'
import { IAppState } from '../constants/StateTypes'
import Goishi from './Goishi'

export interface IMasuProps {
  squares: Array<Array<string|null>>
  col: number
  row: number
}

export interface IMasuOwnProps {
  col: number
  row: number
}

export interface IMasuDispacher {
  hitGoishi: (row: number, col: number) => void
}

// export const Masu = (props: IMasuProps): JSX.Element => {
//   const color: (string|null) = props.squares[props.row][props.col]
//   const goishi: (JSX.Element|null) = color ? <Goishi color={color} /> : null
//   return (
//     <div className="App-masu"
//          id={ `App-masu-${props.row}-${props.col}` }
//          onClick={() => props.hitGoishi(props.row, props.col)}>
//       {goishi}
//     </div>
//   )
// }

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
