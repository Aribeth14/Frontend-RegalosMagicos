import { Link } from 'react-router-dom'
import rm from '../assets/RM.png'

function Navbar() {
  const usuarioLogueado = false

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

      {/* Menú */}
      <div className="hidden md:flex gap-8 text-base text-gray-400 font-bold ml-auto mr-6">
        <Link to="/" className="text-[#00b1c1]">
          Inicio
        </Link>

        <Link
          to="/catalogo"
          className="hover:text-[#bd3869] transition"
        >
          Catálogo
        </Link>

        {usuarioLogueado && (
          <Link
            to="/perfil"
            className="hover:text-[#bd3869] transition"
          >
            Mi perfil
          </Link>
        )}

        {usuarioLogueado && (
          <Link
            to="/carrito"
            className="hover:text-[#bd3869] transition"
          >
            Carrito
          </Link>
        )}
      </div>

      {/* Botón */}
      <Link to="/login">
        <button className="bg-[#bd3869] text-white text-base font-semibold px-5 py-2 rounded-full hover:opacity-90 transition">
          Iniciar sesión
        </button>
      </Link>

    </nav>
  )
}

export default Navbar
