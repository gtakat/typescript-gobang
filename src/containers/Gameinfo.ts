import { connect } from 'react-redux'
import { Gameinfo, IGameinfoProps } from '../components/Gameinfo'

const mapStateToProps = (state: any): IGameinfoProps => (
  {
    current: state.current,
    winner: state.winner,
  }
)

const mapDispatchToProps = (dispatch: any): any => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Gameinfo)
