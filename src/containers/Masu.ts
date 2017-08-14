import { connect, Dispatch } from 'react-redux'
import { hitGoishi } from '../actions'
import { IMasuDispacher, IMasuOwnProps, IMasuProps, Masu } from '../components/Masu'
import { IAppState } from '../constants/StateTypes'

const mapStateToProps = (state: IAppState, ownProps: IMasuOwnProps): IMasuProps => (
  {
    squares: state.squares,
    ...ownProps,
  }
)

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): IMasuDispacher => (
  {
    hitGoishi: (row: number, col: number) => { dispatch(hitGoishi(row, col)) },
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Masu)
