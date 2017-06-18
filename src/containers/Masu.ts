import { connect } from 'react-redux'
import { hitGoishi } from '../actions'
import Masu from '../components/Masu'

interface IMasuDispacher {
  hitGoishi: (row: number, col: number) => (any)
}

const mapStateToProps = (state: any) => (state)

const mapDispatchToProps = (dispatch: any): IMasuDispacher => (
  {
    hitGoishi: (row: number, col: number) => { dispatch(hitGoishi(row, col)) },
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Masu)
