import { connect } from 'react-redux'
import { Gameinfo, GameinfoProps } from '../components/Gameinfo'

const mapStateToProps = (state: any): GameinfoProps => (
  {
    current: state.current,
    winner: state.winner
  }
)

const mapDispatchToProps = (dispatch: any): any => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Gameinfo)