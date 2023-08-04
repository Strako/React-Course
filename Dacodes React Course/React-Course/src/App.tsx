import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthTemplate from './templates/DefaultTemplate/DefaultTemplate'
import Login from './Pages/Auth/Login/Login'
import Movies from './Pages/Movies/Movies'
import Notfound from './Pages/Notfound/Notfound'
import './styles/style.css'
import ProtectedRoute from './Routes/ProtectedRoute'
import PublicRoute from './Routes/PublicRoute'

function App() {
  return (
    <AuthTemplate>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
           </Route>


          <Route element={<ProtectedRoute />}>
            <Route path="/movies" element={<Movies />} />
          </Route>

          <Route path="*" element={<Notfound />} />

        </Routes>
      </BrowserRouter>
    </AuthTemplate>
  )
}

export default App
