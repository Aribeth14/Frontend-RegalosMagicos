import { Link } from 'react-router-dom'
import rm from '../assets/RM.png'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 h-20 bg-white border-b border-pink-100">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-bold text-[#bd3869]">
          <img src = {rm} alt="Logo" className = "h-12 w-auto object-contain"></img>
        </Link>
      </div>

      <div className="hidden md:flex gap-8 text-base text-gray-400 font-bold">
        <Link to="/" className="text-[#00b1c1] transition">Inicio</Link>
        <Link to="/catalogo" className="hover:text-[#bd3869] transition">Catálogo</Link>
        <Link to="/perfil" className="hover:text-[#bd3869] transition">Mi perfil</Link>
        <Link to="/carrito" className="hover:text-[#bd3869] transition">Carrito</Link>
      </div>

      <Link to="/login">
        <button className="bg-[#bd3869] text-white text-base font-semibold px-5 py-2 rounded-full hover:opacity-90 transition">
          Iniciar sesión
        </button>
      </Link>
    </nav>
  )
}

export default Navbar
