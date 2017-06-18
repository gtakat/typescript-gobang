import { connect } from 'react-redux'
import Gameinfo from '../components/Gameinfo'

interface GameinfoState {
  current: string
  winner: string
}

const mapStateToProps = (state: any): GameinfoState => (
  {
    current: state.current,
    winner: state.winner
  }
)

export default connect(mapStateToProps)(Gameinfo)