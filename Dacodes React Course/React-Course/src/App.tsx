import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Auth/Login/Login'
import './styles/style.css'
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login/>
    <ForgotPassword/>
    </>
  )
}

export default App
