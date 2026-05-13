import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-pink-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 border-2 border-[#00b1c1] rounded-lg flex items-center justify-center text-sm">
          🎁
        </div>
        <Link to="/" className="font-bold text-[#bd3869]">Regalos Mágicos</Link>
      </div>

      <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
        <Link to="/" className="hover:text-[#bd3869] transition">Inicio</Link>
        <Link to="/catalogo" className="hover:text-[#bd3869] transition">Catálogo</Link>
        <Link to="/perfil" className="hover:text-[#bd3869] transition">Mi perfil</Link>
        <Link to="/carrito" className="hover:text-[#bd3869] transition">Carrito</Link>
      </div>

      <Link to="/login">
        <button className="bg-[#bd3869] text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition">
          Iniciar sesión
        </button>
      </Link>
    </nav>
  )
}

export default Navbar
