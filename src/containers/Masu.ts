import { connect } from 'react-redux'
import Masu from '../components/Masu'
import { hitGoishi } from '../actions'

interface MasuDispacher {
  hitGoishi: (row: number, col: number) => (any)
}

const mapStateToProps = (state: any) => (state)

const mapDispatchToProps = (dispatch: any): MasuDispacher => (
  {
    hitGoishi: (row: number, col: number) => { dispatch(hitGoishi(row, col)) }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Masu)