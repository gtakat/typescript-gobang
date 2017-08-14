import { connect, Dispatch } from 'react-redux'
import { Gameinfo, IGameinfoProps } from '../components/Gameinfo'
import { IAppState } from '../constants/StateTypes'

const mapStateToProps = (state: IAppState): IGameinfoProps => (
  {
    current: state.current,
    winner: state.winner,
  }
)

// const mapDispatchToProps = (dispatch: Dispatch<IAppState>): any => ({})

export default connect(mapStateToProps)(Gameinfo)
