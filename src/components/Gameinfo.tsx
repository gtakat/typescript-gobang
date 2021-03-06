import * as React from 'react'
import { AppStateWinner, IAppState } from '../constants/StateTypes'
import Goishi from './Goishi'

export interface IGameinfoProps {
  winner?: AppStateWinner
  current?: string
}

export class Gameinfo extends React.Component<IGameinfoProps, IAppState> {
  public render(): JSX.Element {
    let informations: (JSX.Element|string) = ''

    if (this.props.winner) {
      informations =
        <ul>
          <li id="App-game-info-left">Winner! :</li>
          <li id="App-game-info-right"><Goishi color={this.props.winner} /></li>
        </ul>
    } else {
      informations =
        <ul>
          <li id="App-game-info-left">Next player:</li>
          <li id="App-game-info-right"><Goishi color={this.props.current} /></li>
        </ul>
    }
    return (
      <div id="App-game-info">
        {informations}
      </div>
    )
  }
}
