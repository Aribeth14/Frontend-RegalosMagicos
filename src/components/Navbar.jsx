import { Link } from 'react-router-dom'
import rm from '../assets/RM.png'
import storeAuth from '../context/storeAuth'

function Navbar() {
  const { token } = storeAuth()
  const usuarioLogueado = !!token

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center px-12 h-20 bg-white border-b border-pink-100">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="font-bold text-[#bd3869]">
          <img
            src={rm}
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Menú de Navegación */}
      <div className="hidden md:flex gap-8 text-base text-gray-400 font-bold ml-auto mr-6">
        {/* Redirige a la página de Inicio */}
        <Link to="/" className="text-[#00b1c1]">
          Inicio
        </Link>

        {/* Redirige exactamente a la página de Catálogo 🎁 */}
        <Link
          to="/catalogo"
          className="hover:text-[#bd3869] transition"
        >
          Catálogo
        </Link>

        {/* Solo si está logueado: Redirige al Dashboard de cliente */}
        {usuarioLogueado && (
          <Link
            to="/dashboard"
            className="hover:text-[#bd3869] transition"
          >
            Mi perfil
          </Link>
        )}

        {/* Solo si está logueado: Redirige al Carrito */}
        {usuarioLogueado && (
          <Link
            to="/carrito"
            className="hover:text-[#bd3869] transition"
          >
            Carrito
          </Link>
        )}
      </div>

      {/* Botones de la esquina derecha */}
      <div className="flex items-center gap-4">
        {/* Si NO está logueado, muestra iniciar sesión */}
        {!usuarioLogueado && (
          <Link
            to="/login"
            className="bg-[#bd3869] text-white text-base font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Iniciar sesión
          </Link>
        )}
      </div>

    </nav>
  )
}

export default Navbar