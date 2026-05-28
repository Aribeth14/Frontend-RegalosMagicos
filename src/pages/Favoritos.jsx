import React from 'react'
import { FaHeart, FaTrash } from 'react-icons/fa'

// Importamos un par de imágenes del catálogo para que se vea real
// Nota: Ajusta la ruta '../assets/...' si tu estructura de carpetas es diferente
import rfa from '../assets/desayuno_arco.jpeg'
import af from '../assets/arreglo_flores.jpeg'
import rp from '../assets/regalo_peluche.jpeg'

const Favoritos = () => {
  // Datos quemados de los productos guardados como favoritos por el usuario
  const misFavoritos = [
    { id: 1, img: rfa, nombre: 'Regalo Futbolero Arco', desc: '7 golosinas + mini pastel + peluche de balon de fútbol', precio: 22.00, categoria: 'Regalos' },
    { id: 2, img: af, nombre: 'Arreglo Floral', desc: '6 flores + 4 dulces + tarjeta o foto', precio: 18.00, categoria: 'Arreglos' },
    { id: 3, img: rp, nombre: 'Regalo Peluche', desc: 'Peluche pequeño + 7 golosinas + de 6 a 8 flores', precio: 15.00, categoria: 'Regalos' }
  ]

  return (
    <div>
      {/* Encabezado de la sección */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#bd3869] flex items-center gap-2">
          <FaHeart className="text-[#bd3869]" /> Mis Favoritos
        </h1>
        <p className="text-sm text-gray-500">Los regalos y detalles que más te han gustado</p>
      </div>

      {/* Grid de Tarjetas de Favoritos */}
      {misFavoritos.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-pink-100 p-8">
          <p className="text-4xl mb-3">❤️</p>
          <p className="text-gray-400 text-sm">Aún no tienes productos guardados como favoritos.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {misFavoritos.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl border border-pink-100 overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              {/* Imagen del Producto */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.nombre}
                  className="w-full h-48 object-cover"
                  onError={e => e.target.src = 'https://via.placeholder.com/400x200?text=Imagen+no+disponible'}
                />
                <span className="absolute top-3 left-3 text-[11px] font-bold uppercase text-[#00b1c1] bg-[#e8f7f9] px-2.5 py-1 rounded-full shadow-sm">
                  {item.categoria}
                </span>
              </div>

              {/* Contenido / Detalles */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-700 text-lg">{item.nombre}</h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">{item.desc}</p>
                </div>

                {/* Precio y Botones de Acción */}
                <div className="mt-5 border-t border-gray-50 pt-3 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">Precio</p>
                    <p className="text-lg font-extrabold text-[#bd3869]">${item.precio.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    {/* Botón Eliminar de favoritos */}
                    <button 
                      title="Eliminar de favoritos"
                      className="w-9 h-9 rounded-xl border border-pink-200 text-gray-400 flex items-center justify-center hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition duration-300"
                    >
                      <FaTrash size={14} />
                    </button>

                    {/* Botón Añadir al carrito rápido */}
                    <button className="bg-[#bd3869] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#a22f59] transition shadow-sm">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favoritos