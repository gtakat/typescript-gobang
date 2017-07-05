import * as React from 'react'
import Goishi from './Goishi'

export interface IMasuProps {
  squares: Array<Array<string|null>>
  key: string
  row: number
  col: number
  hitGoishi: any
}

export const Masu = (props: IMasuProps|any): JSX.Element => {
  const color: (string|null) = props.squares[props.row][props.col]
  const goishi: (JSX.Element|null) = color ? <Goishi color={color} /> : null
  return (
    <div className="App-masu"
         id={ `App-masu-${props.row}-${props.col}` }
         onClick={() => props.hitGoishi(props.row, props.col)}>
      {goishi}
    </div>
  )
}
