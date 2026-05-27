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
import ResetPassword from './pages/ResetPassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import Dashboard from './layout/Dashboard'
import PublicRoute from './routes/PublicRoute'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicRoute />}>
          <Route path="/" element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-1"><Home /></div>
              <Footer />
            </div>
          } />
          <Route path="/catalogo" element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-1"><Catalogo /></div>
              <Footer />
            </div>
          } />
          <Route path="/carrito" element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-1"><Carrito /></div>
              <Footer />
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-password" element={<RecuperarPassword />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/confirmar/:token" element={<ConfirmarCuenta />} />
        </Route>

        <Route path="/dashboard/*" element={
          <ProtectedRoute>
            <Routes>
              <Route element={<Dashboard />}>
                <Route index element={<Perfil />} />
                <Route path="perfil" element={<Perfil />} />
              </Route>
            </Routes>
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
