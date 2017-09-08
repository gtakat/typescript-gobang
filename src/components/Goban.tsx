import * as React from 'react'
import { AppStateSquares, IAppState } from '../constants/StateTypes'
import Masu from '../containers/Masu'

interface IGobanProps {
  squares?: AppStateSquares
}

export class Goban extends React.Component<IGobanProps, IAppState> {
  public render(): JSX.Element {
    const squares: JSX.Element[] = []

    for (let i = 0; i < 19; i++) {
      for (let j = 0; j < 19; j++) {
        const key: string = `${i}_${j}`
        const masu = <Masu key={key} row={i} col={j} />
        squares.push(masu)
      }
    }
    return (
      <div id="App-goban">
        <div>{squares}</div>
      </div>
    )
  }
}

export default Goban
