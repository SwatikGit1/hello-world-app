import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmittedName(name)
  }

  const handleReset = () => {
    setName('')
    setSubmittedName('')
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Hello World!</h1>

        {!submittedName ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">What's your name?</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              autoFocus
            />
            <button type="submit" disabled={!name.trim()}>
              Say Hello
            </button>
          </form>
        ) : (
          <div className="greeting">
            <h2>Welcome, {submittedName}!</h2>
            <p>We're glad to have you here.</p>
            <button onClick={handleReset}>
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
