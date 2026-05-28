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

// Renombrado para que coincida con tu vista de cliente ✨
import Favoritos from './pages/Favoritos' 
import Pedidos from './pages/Pedidos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* 🏠 RUTA DE INICIO (LIBRE) */}
        <Route path="/" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1"><Home /></div>
            <Footer />
          </div>
        } />

        {/* 🎁 RUTA DEL CATÁLOGO (LA SACAMOS AQUÍ PARA QUE SEA LIBRE) 👈 */}
        <Route path="/catalogo" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1"><Catalogo /></div>
            <Footer />
          </div>
        } />

        {/* 🔒 RUTAS EXCLUSIVAS PARA USUARIOS NO LOGUEADOS (ANÓNIMOS) */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-password" element={<RecuperarPassword />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/confirmar/:token" element={<ConfirmarCuenta />} />
        </Route>

        {/* 🛒 RUTA DEL CARRITO (Opcional: Si quieres que cualquiera lo vea, déjalo aquí. Si solo es para logueados, se puede mover a ProtectedRoute) */}
        <Route path="/carrito" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1"><Carrito /></div>
            <Footer />
          </div>
        } />

        {/* 👤 SECCIÓN PROTEGIDA DEL DASHBOARD DE CLIENTE */}
        <Route path="/dashboard/*" element={
          <ProtectedRoute>
            <Routes>
              <Route element={<Dashboard />}>
                {/* Al entrar a /dashboard mostrará el perfil por defecto */}
                <Route index element={<Perfil />} />
                <Route path="perfil" element={<Perfil />} />
                
                {/* Rutas hijas del cliente conectado con los nombres correctos */}
                <Route path="favoritos" element={<Favoritos />} />
                <Route path="pedidos" element={<Pedidos />} />
              </Route>
            </Routes>
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App