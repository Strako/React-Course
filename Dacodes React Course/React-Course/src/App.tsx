import './App.css'
import Login from './Pages/Auth/Login/Login'
import './styles/style.css'
import AuthTemplate from './templates/DefaultTemplate/DefaultTemplate'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './Pages/Notfound/Notfound'
import Example from './Pages/Example/Example'
function App() {
  return (
    <BrowserRouter>
      <AuthTemplate>
        <Routes>
          <Route path="/" element={
            <Login />
          } />
          <Route path="*" element={
            <NotFound />
          } />
          <Route path="/example" element={
            <Example />
          } />
        </Routes>
      </AuthTemplate>

    </BrowserRouter>

  )
}

export default App
