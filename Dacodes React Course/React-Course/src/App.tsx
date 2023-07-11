import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Auth/Login/Login'
import './styles/style.css'
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword'
import AuthTemplate from './templates/AuthTemplate/AuthTemplate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthTemplate>
    <Login/>
    <ForgotPassword/>
    </AuthTemplate>
    </>
  )
}

export default App
