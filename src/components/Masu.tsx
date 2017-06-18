import * as React from 'react'
import Goishi from './Goishi'

interface MasuProps {
  squares: Array<string|null>[]
  row: number
  col: number
  hitGoishi: any
}

const Masu = (props: MasuProps): JSX.Element => {
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

export default Masu
