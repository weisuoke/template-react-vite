import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // console.log(import.meta.env.VITE_APP_TEST)
  return (
    <div>Vite React App {import.meta.env.VITE_APP_TEST}</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
