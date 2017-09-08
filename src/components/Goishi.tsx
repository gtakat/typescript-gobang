import * as React from 'react'

interface IGoishiProps {
  color?: string
}

const Goishi = (props: IGoishiProps): (JSX.Element|null) => {
  if (props.color === 'black') {
    return <div className="App-goishi-black" />
  } else if (props.color === 'white') {
    return <div className="App-goishi-white" />
  }
  return null
}

export default Goishi
