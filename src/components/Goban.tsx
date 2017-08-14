import * as React from 'react'
import { IAppState } from '../constants/StateTypes'
import Masu from '../containers/Masu'

export class Goban extends React.Component<{}, IAppState> {
  public render(): JSX.Element {
    const squares: any[] = []

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
