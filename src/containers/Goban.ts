import { connect } from 'react-redux'
import { Goban } from '../components/Goban'
import { IAppState } from '../constants/StateTypes'

const mapStateToProps = (state: IAppState): any => (state)

const mapDispatchToProps = (dispatch: any): any => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Goban)
