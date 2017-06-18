import * as React from 'react'

interface Props {
  color: string
}

const Goishi = (props: Props): (JSX.Element|null) => {
  if (props.color === 'black') {
    return <div className="App-goishi-black" />
  } else if (props.color === 'white') {
    return <div className="App-goishi-white" />
  }
  return null
}

export default Goishi