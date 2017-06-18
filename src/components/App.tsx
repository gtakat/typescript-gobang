import * as React from 'react'
import '../App.css'
import Footer from './Footer'
import Game from './Game'
import Header from './Header'

const App = (): JSX.Element => (
  <div className="App">
    <Header />
    <Game />
    <Footer />
  </div>
)

export default App
