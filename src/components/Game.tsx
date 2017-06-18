import * as React from 'react'
import Goban from '../components/Goban'
import Gameinfo from '../containers/Gameinfo'

const Game = (): JSX.Element => (
  <div id="App-game">
    <Gameinfo />
    <Goban />
  </div>
)

export default Game
