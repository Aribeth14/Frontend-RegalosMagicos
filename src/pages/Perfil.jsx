import { useState } from 'react'

function Perfil() {
  const [editando, setEditando] = useState(false)
  const [usuario, setUsuario] = useState({
    nombre: 'María García',
    correo: 'maria@correo.com',
    telefono: '0987654321',
    direccion: 'Quito, Ecuador',
  })

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-[#fdf6f9] px-6 py-10">
      <div className="max-w-2xl mx-auto">

        <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-sm mb-6">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#fce8f3] flex items-center justify-center text-3xl mb-4 border-2 border-[#f8cdeb]">
              👤
            </div>
            <h2 className="text-xl font-bold text-gray-700">{usuario.nombre}</h2>
            <p className="text-sm text-gray-400">{usuario.correo}</p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Nombre completo
              </label>
              <input
                type="text"
                name="nombre"
                value={usuario.nombre}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-600 outline-none transition ${
                  editando
                    ? 'border-[#00b1c1] bg-white'
                    : 'border-pink-100 bg-[#fdf6f9]'
                }`}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Correo electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={usuario.correo}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-600 outline-none transition ${
                  editando
                    ? 'border-[#00b1c1] bg-white'
                    : 'border-pink-100 bg-[#fdf6f9]'
                }`}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Teléfono
              </label>
              <input
                type="text"
                name="telefono"
                value={usuario.telefono}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-600 outline-none transition ${
                  editando
                    ? 'border-[#00b1c1] bg-white'
                    : 'border-pink-100 bg-[#fdf6f9]'
                }`}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Dirección
              </label>
              <input
                type="text"
                name="direccion"
                value={usuario.direccion}
                onChange={handleChange}
                disabled={!editando}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-600 outline-none transition ${
                  editando
                    ? 'border-[#00b1c1] bg-white'
                    : 'border-pink-100 bg-[#fdf6f9]'
                }`}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            {editando ? (
              <>
                <button
                  onClick={() => setEditando(false)}
                  className="flex-1 bg-[#bd3869] text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition"
                >
                  Guardar cambios
                </button>
                <button
                  onClick={() => setEditando(false)}
                  className="flex-1 border border-pink-100 text-gray-400 py-3 rounded-xl text-sm font-semibold hover:bg-[#fdf6f9] transition"
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditando(true)}
                className="flex-1 border border-[#00b1c1] text-[#00b1c1] py-3 rounded-xl text-sm font-semibold hover:bg-[#f0fafb] transition"
              >
                Editar perfil
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-pink-100 p-6 shadow-sm">
          <h3 className="text-sm font-bold text-gray-600 mb-4">Mis pedidos recientes</h3>
          {[
            { id: '#001', producto: 'Desayuno Sorpresa', estado: 'Entregado', fecha: '10 May 2026', precio: '$18.00' },
            { id: '#002', producto: 'Arreglo Floral', estado: 'En camino', fecha: '12 May 2026', precio: '$24.00' },
          ].map((pedido, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-pink-50 last:border-0">
              <div>
                <p className="text-sm font-semibold text-gray-700">{pedido.producto}</p>
                <p className="text-xs text-gray-400">{pedido.fecha} · {pedido.id}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#bd3869]">{pedido.precio}</p>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  pedido.estado === 'Entregado'
                    ? 'bg-[#e8f7f9] text-[#00b1c1]'
                    : 'bg-[#fce8f3] text-[#bd3869]'
                }`}>
                  {pedido.estado}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Perfil
