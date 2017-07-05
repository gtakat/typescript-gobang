import * as React from 'react'
import Gameinfo from '../containers/Gameinfo'
import Goban from '../containers/Goban'

const Game = (): JSX.Element => (
  <div id="App-game">
    <Gameinfo />
    <Goban />
  </div>
)

export default Game
