import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './assets/logo.png'

const App = () => {
  // console.log(import.meta.env.VITE_APP_TEST)
  return (
    <>
      <div>Vite React App {import.meta.env.VITE_APP_TEST}</div>
      <div>
        <img src={Logo} alt=""/>
      </div>
    </>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))
