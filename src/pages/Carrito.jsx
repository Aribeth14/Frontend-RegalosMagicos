import { useState } from 'react'

function Carrito() {
  const [items, setItems] = useState([
    { id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JcVm-mFXKR4dEuQTFoaciBXFz8k33GSdZA&s', nombre: 'Desayuno Sorpresa', precio: 18.00, cantidad: 1 },
    { id: 2, img: 'https://www.shutterstock.com/image-photo/beautiful-floral-arrangement-roses-gerbera-260nw-2634603335.jpg', nombre: 'Arreglo Floral', precio: 24.00, cantidad: 1 },
  ])

  const aumentar = (id) => setItems(items.map(i => i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i))
  const disminuir = (id) => setItems(items.map(i => i.id === id && i.cantidad > 1 ? { ...i, cantidad: i.cantidad - 1 } : i))
  const eliminar = (id) => setItems(items.filter(i => i.id !== id))
  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0)

  return (
    <div className="min-h-screen bg-[#fdf6f9] px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">Mi <span className="text-[#bd3869]">Carrito</span></h1>
        <p className="text-sm text-gray-400 mb-8">{items.length} productos seleccionados</p>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-pink-100">
            <p className="text-4xl mb-4">🛒</p>
            <p className="text-gray-400 text-sm">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="bg-white rounded-2xl border border-pink-100 p-4 flex items-center gap-4">
                  <img src={item.img} alt={item.nombre} className="w-20 h-20 object-cover rounded-xl" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-700 text-sm">{item.nombre}</p>
                    <p className="text-[#bd3869] font-bold mt-1">${item.precio.toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => disminuir(item.id)} className="w-7 h-7 rounded-full border border-pink-100 text-gray-400 flex items-center justify-center hover:border-[#bd3869] hover:text-[#bd3869] transition">-</button>
                      <span className="text-sm font-semibold text-gray-700">{item.cantidad}</span>
                      <button onClick={() => aumentar(item.id)} className="w-7 h-7 rounded-full border border-pink-100 text-gray-400 flex items-center justify-center hover:border-[#bd3869] hover:text-[#bd3869] transition">+</button>
                    </div>
                  </div>
                  <button onClick={() => eliminar(item.id)} className="text-gray-300 hover:text-[#bd3869] transition text-lg">✕</button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-pink-100 p-6">
              <div className="flex justify-between mb-3">
                <span className="text-sm text-gray-400">Subtotal</span>
                <span className="text-sm font-semibold text-gray-700">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-sm text-gray-400">Envío</span>
                <span className="text-sm font-semibold text-[#00b1c1]">Gratis</span>
              </div>
              <div className="flex justify-between border-t border-pink-50 pt-4 mb-6">
                <span className="font-bold text-gray-700">Total</span>
                <span className="font-bold text-[#bd3869] text-lg">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#bd3869] text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition">
                Proceder al pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Carrito
