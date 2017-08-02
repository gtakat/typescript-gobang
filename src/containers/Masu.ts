import { connect } from 'react-redux'
import { hitGoishi } from '../actions'
import { Masu } from '../components/Masu'
import { IAppState } from '../constants/StateTypes'

interface IMasuDispacher {
  hitGoishi: (row: number, col: number) => (any)
}

const mapStateToProps = (state: IAppState): IAppState => (state)

const mapDispatchToProps = (dispatch: any): IMasuDispacher => (
  {
    hitGoishi: (row: number, col: number) => { dispatch(hitGoishi(row, col)) },
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Masu)
