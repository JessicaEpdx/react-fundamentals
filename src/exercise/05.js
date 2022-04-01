// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const SIZE_CLASSES = {
  small: 'box--small',
  medium: 'box--medium',
  large: 'box--large',
}

const Box = ({style, size, text}) => {
  return (
    <div
      className={`box ${size ? SIZE_CLASSES[size] : ''}`}
      style={{fontStyle: 'italic', ...style}}
    >
      {text}
    </div>
  )
}

const smallBox = (
  <Box
    size="small"
    style={{backgroundColor: 'lightblue'}}
    text="small blue box"
  />
)
const mediumBox = (
  <Box size="medium" text="medium pink box" style={{backgroundColor: 'pink'}} />
)
const largeBox = (
  <Box
    size="large"
    text="large orange box"
    style={{backgroundColor: 'orange'}}
  />
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
