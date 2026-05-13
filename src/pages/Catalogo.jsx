import { useState } from 'react'

const productos = [
  { id: 1, img: 'https://i.pinimg.com/736x/de/b3/2b/deb32baf517ae6d7db02a700d6409eee.jpg', nombre: 'Desayuno Sorpresa', desc: 'Pan artesanal + frutas + café', precio: 18.00, categoria: 'Desayunos' },
  { id: 2, img: 'https://static.vecteezy.com/system/resources/previews/005/385/876/non_2x/romantic-breakfast-in-bed-photo.jpg', nombre: 'Desayuno Romántico', desc: 'Pancakes + fresas + chocolate', precio: 22.00, categoria: 'Desayunos' },
  { id: 3, img: 'https://thumbs.dreamstime.com/b/un-desayuno-cl%C3%A1sico-con-tostadas-y-t%C3%A9-servido-en-plato-blanco-fondo-disfrute-de-crujientes-doradas-una-taza-caliente-este-386153437.jpg', nombre: 'Desayuno Clásico', desc: 'Café + tostadas + mermelada', precio: 15.00, categoria: 'Desayunos' },
  { id: 4, img: 'https://arreglosfloralesguate.com/wp-content/uploads/2023/11/Floral-Navideno-3.jpg.webp', nombre: 'Arreglo Floral', desc: 'Rosas + girasoles + tarjeta', precio: 24.00, categoria: 'Regalos' },
  { id: 5, img: 'https://i.pinimg.com/474x/cb/05/58/cb0558baea91c235ac81930f0fe4ec63.jpg', nombre: 'Caja Mágica', desc: 'Personalizada con foto y mensaje', precio: 32.00, categoria: 'Regalos' },
  { id: 6, img: 'https://s9790.pcdn.co/wp-content/uploads/2022/08/fbacd276-26ec-4218-bafa-ae5fb5aef07a.jpg', nombre: 'Kit Sorpresa', desc: 'Peluche + chocolates + tarjeta', precio: 28.00, categoria: 'Regalos' },
  { id: 7, img: 'https://static.bainet.es/clip/1d87f9b4-721d-4582-ad3a-6151b7a90f38_source-aspect-ratio_1600w_0.jpg', nombre: 'Arreglo de Fresas', desc: 'Fresas con chocolate belga', precio: 20.00, categoria: 'Arreglos' },
  { id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPxwjLtdGwOL7yukbqPIRAF-MfT6EOu1LO2g&s', nombre: 'Ramo Premium', desc: '12 rosas + follaje + cinta', precio: 35.00, categoria: 'Arreglos' },
]

const categorias = ['Todos', 'Desayunos', 'Regalos', 'Arreglos']

function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  const productosFiltrados = productos.filter(p => {
    const coincideCategoria = categoriaActiva === 'Todos' || p.categoria === categoriaActiva
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  return (
    <div className="min-h-screen bg-[#fdf6f9]">

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
              <div key={item.id} className="bg-white rounded-2xl border border-pink-100 overflow-hidden hover:shadow-md transition cursor-pointer">
                <img
                  src={item.img}
                  alt={item.nombre}
                  className="w-full h-48 object-cover"
                  onError={e => e.target.src = 'https://via.placeholder.com/400x200?text=Imagen+no+disponible'}
                />
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#00b1c1] bg-[#e8f7f9] px-2 py-1 rounded-full">
                    {item.categoria}
                  </span>
                  <p className="font-semibold text-gray-700 text-sm mt-3">{item.nombre}</p>
                  <p className="text-xs text-gray-400 mt-1 mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#bd3869] font-bold">${item.precio.toFixed(2)}</span>
                    <div className="flex gap-2">
                      <button className="border border-[#bd3869] text-[#bd3869] text-xs font-semibold px-3 py-2 rounded-full hover:bg-[#fce8f3] transition">
                        Personalizar
                      </button>
                      <button className="w-8 h-8 rounded-full bg-[#00b1c1] text-white flex items-center justify-center text-lg hover:opacity-80 transition">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Catalogo
