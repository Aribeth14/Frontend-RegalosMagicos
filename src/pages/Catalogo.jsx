import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import storeAuth from '../context/storeAuth'

import rfa from '../assets/desayuno_arco.jpeg'
import af from '../assets/arreglo_flores.jpeg'
import rp from '../assets/regalo_peluche.jpeg'
import dbh from '../assets/desayuno_bh.jpeg'
import dma from '../assets/desayunoM_arco.jpeg'
import dhbm from '../assets/desayunoHB_madera.jpeg'
import dmf from '../assets/desayunoM_flores.jpeg'
import fb from '../assets/fresas_burbuja.jpeg'
import cb from '../assets/regaloB_cerveza.jpeg'
import ctj from '../assets/cajaT_jarro.jpeg'
import rfr from '../assets/ramoFR.jpeg'
import cff from '../assets/cajaFF.jpeg'

const productos = [
  { id: 1, img: rfa, nombre: 'Regalo Futbolero Arco', desc: '7 golosinas + mini pastel + peluche de balon de fútbol + tarjeta o foto', precio: 22.00, categoria: 'Regalos' },
  { id: 2, img: af, nombre: 'Arreglo Floral', desc: '6 flores + 4 dulces + tarjeta o foto', precio: 18.00, categoria: 'Arreglos' },
  { id: 3, img: rp, nombre: 'Regalo Peluche', desc: 'Peluche pequeño + 7 golosinas + de 6 a 8 flores + tarjeta o foto', precio: 15.00, categoria: 'Regalos' },
  { id: 4, img: dbh, nombre: 'Desayuno Grande Hombre', desc: 'Doble platillo fuerte + mini pastel + frutas + jugo + frutos secos + snack dulce + yogurt con granola + mini vino + copa + tarjeta o foto', precio: 40.00, categoria: 'Desayunos' },
  { id: 5, img: dma, nombre: 'Desayuno Mujer Arco', desc: 'Plato fuerte + mini pastel + frutas + jugo o caffe lato + frutos secos + snack dulce + yogurt con granola + tarjeta o foto', precio: 20.00, categoria: 'Desayunos' },
  { id: 6, img: dhbm, nombre: 'Desayuno Hombre Burbuja', desc: 'Plato fuerte + mini pastel + frutas + jugo + frutos secos + snack dulce + yogurt + mini vino + copa + tarjeta o foto', precio: 35.00, categoria: 'Desayunos' },
  { id: 7, img: dmf, nombre: 'Desayuno Mujer Flores', desc: 'Plato fuerte + frutas + jugo + frutos secos + snack dulce + yogurt con granola + tarjeta o foto + flores', precio: 30.00, categoria: 'Desayunos' },
  { id: 8, img: fb, nombre: 'Arreglo de Fresas', desc: 'Fresas con chocolate + tarjeta o foto', precio: 20.00, categoria: 'Regalos' },
  { id: 9, img: cb, nombre: 'Arreglo de Cerveza', desc: 'Cerveza corona + copa + 2 golosinas + mini vino + frutos secos + tarjeta o foto', precio: 35.00, categoria: 'Regalos' },
  { id: 10, img: ctj, nombre: 'Caja con tapa', desc: 'Jarro CERVECERO + 3 golosinas + cerveza corona + frutos secos + tarjeta o foto', precio: 30.00, categoria: 'Regalos' },
  { id: 11, img: rfr, nombre: 'Ramo rosas y ferreros', desc: 'Ramo de 12 rosas + 6 ferreros + tarjeta o foto', precio: 30.00, categoria: 'Arreglos' },
  { id: 12, img: cff, nombre: 'Caja con flores y fresas', desc: '6 flores + 6 fresas con chocolate + tarjeta o foto', precio: 25.00, categoria: 'Arreglos' }
]

const categorias = ['Todos', 'Desayunos', 'Regalos', 'Arreglos']

function Catalogo() {
  const { token } = storeAuth()
  const usuarioLogueado = !!token
  const [favorito, setFavorito] = useState(false)

  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  const productosFiltrados = productos.filter(p => {
    const coincideCategoria = categoriaActiva === 'Todos' || p.categoria === categoriaActiva
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  

  return (
    
    <div className="min-h-screen bg-[#fdf6f9] pt-24">

      <div className="bg-white border-b border-pink-100 px-12 py-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-1">
          Nuestro <span className="text-[#bd3869]">Catálogo</span>
        </h1>
        <p className="text-gray-400 text-sm">Encuentra el regalo perfecto para cada ocasión</p>

        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <input
            type="text"
            placeholder="🔍 Buscar producto..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            className="border border-pink-100 rounded-xl px-4 py-2 text-sm text-gray-600 outline-none focus:border-[#00b1c1] transition w-full md:w-72"
          />
          <div className="flex gap-2 flex-wrap">
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  categoriaActiva === cat
                    ? 'bg-[#bd3869] text-white'
                    : 'bg-white border border-pink-100 text-gray-400 hover:border-[#bd3869] hover:text-[#bd3869]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-12 py-8 max-w-6xl mx-auto">
        {productosFiltrados.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🎁</p>
            <p className="text-gray-400 text-sm">No se encontraron productos</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productosFiltrados.map(item => (
              <div key={item.id} className="group relative bg-white rounded-2xl border border-pink-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 duration-300 transition cursor-pointer">
                <img
                  src={item.img}
                  alt={item.nombre}
                  className="w-full h-66 object-cover"
                  onError={e => e.target.src = 'https://via.placeholder.com/400x200?text=Imagen+no+disponible'}
                />
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#00b1c1] bg-[#e8f7f9] px-2 py-1 rounded-full">
                    {item.categoria}
                  </span>
                  <p className="font-semibold text-gray-700 text-lg mt-3">{item.nombre}</p>
                  <p className="text-sm text-gray-400 mt-1 mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#bd3869] font-bold">${item.precio.toFixed(2)}</span>
                    <div className="flex gap-2">
                      {usuarioLogueado && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => setFavorito(!favorito)}
                            className="w-8 h-8 rounded-full border border-pink-200 text-[#bd3869] flex items-center justify-center hover:bg-[#fce8f3] hover:scale-110 transition duration-300"
                          >
                            {favorito ? <FaHeart size={14} /> : <FaRegHeart size={14} />}
                          </button>

                          <button className="border border-[#bd3869] text-[#bd3869] text-xs font-semibold px-3 py-2 rounded-full hover:bg-[#fce8f3] transition">
                            Personalizar
                          </button>

                          <button className="w-8 h-8 rounded-full bg-[#00b1c1] text-white flex items-center justify-center text-lg hover:opacity-80 transition">
                            +
                          </button>

                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {!usuarioLogueado && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  
                  <div className="bg-white px-5 py-3 rounded-2xl shadow-lg">
                    <p className="text-sm font-semibold text-[#bd3869] text-center">
                      Debes iniciar sesión para comprar
                    </p>
                  </div>

                </div>
              )}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Catalogo
