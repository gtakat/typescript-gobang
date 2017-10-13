import * as React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import Masu from '../../containers/Masu'
import Goishi from '../Goishi'
import { AppStateSquares } from '../../constants/StateTypes'
import store from '../../reducers/index'
import { Provider } from 'react-redux'

describe('<Masu>', () => {
  let squares: AppStateSquares = []

  beforeEach(() => {
    squares = Array(19)
    for (let i=0; i<squares.length; i++) {
      squares[i] = Array(19).fill(null)
    }
  })

  it('render masu black', () => {
    squares[9][9] = 'black'
    const wrapper = mount(<Provider store={store}><Masu squares={squares} row={9} col={9} /></Provider>)
    expect(wrapper.contains(<Goishi color="black" />)).to.equal(true)
  })

  it('render masu white', () => {
    squares[9][9] = 'white'
    const wrapper = mount(<Provider store={store}><Masu squares={squares} row={9} col={9} /></Provider>)
    expect(wrapper.contains(<Goishi color="white" />)).to.equal(true)
  })

  it('render masu none', () => {
    const wrapper = mount(<Provider store={store}><Masu squares={squares} row={9} col={9} /></Provider>)
    expect(wrapper.find(<Goishi color="" />).exists()).to.be.false
  })
})