// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const input = React.useRef(null)
  const [username, setUsername] = React.useState('')

  const handleChange = e => {
    e.preventDefault()
    const currentValue = input.current.value
    setUsername(currentValue)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const currentValue = input.current.value
    onSubmitUsername(currentValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={input}
          id="usernameInput"
          type="text"
          value={username?.toLowerCase()}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
