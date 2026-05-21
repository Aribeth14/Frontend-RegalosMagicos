import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Catalogo from './pages/Catalogo'
import Perfil from './pages/Perfil'
import Carrito from './pages/Carrito'
import RecuperarPassword from './pages/RecuperarPassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import ResetPassword from './pages/ResetPassword'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/recuperar-password" element={<RecuperarPassword />} />
            <Route path="/confirmar/:token" element={<ConfirmarCuenta />} />
            <Route path="/reset/:token" element={<ResetPassword />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
