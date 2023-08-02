import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthTemplate from './templates/DefaultTemplate/DefaultTemplate'
import Login from './Pages/Auth/Login/Login'
import Movies from './Pages/Movies/Movies'
import Notfound from './Pages/Notfound/Notfound'
import './styles/style.css'
import { useState } from 'react'

function App() {
const [isAuthetcicated, setIsAuthenticated] = useState(false);



  return (
    <AuthTemplate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </AuthTemplate>
  )
}

export default App
