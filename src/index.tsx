import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { createStore } from 'redux'
import * as Redux from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './reducers/index'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
