import React from 'react'

const Pedidos = () => {
  // Datos quemados de pedidos
  const listaPedidos = [
    { id: "RM-1001", cliente: "María López", fecha: "28/05/2026", total: 38.49, estado: "Entregado" },
    { id: "RM-1002", cliente: "Carlos Pérez", fecha: "27/05/2026", total: 45.00, estado: "Pendiente" },
    { id: "RM-1003", cliente: "Ana Gómez", fecha: "26/05/2026", total: 21.49, estado: "Enviado" },
    { id: "RM-1004", cliente: "Juan Torres", fecha: "25/05/2026", total: 12.50, estado: "Entregado" },
  ]

  // Función interna para pintar las etiquetas de estado
  const getEstadoEstilo = (estado) => {
    switch (estado) {
      case 'Entregado': return 'bg-green-100 text-green-700'
      case 'Enviado': return 'bg-blue-100 text-blue-700'
      case 'Pendiente': return 'bg-amber-100 text-amber-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#bd3869]">Pedidos</h1>
        <p className="text-sm text-gray-500">Historial de órdenes recibidas</p>
      </div>

      <div className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#fdf6f9] border-b border-pink-100 text-gray-600 text-sm font-semibold">
                <th className="p-4">ID Pedido</th>
                <th className="p-4">Cliente</th>
                <th className="p-4">Fecha</th>
                <th className="p-4">Total</th>
                <th className="p-4">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {listaPedidos.map((pedido) => (
                <tr key={pedido.id} className="hover:bg-pink-50/30 transition">
                  <td className="p-4 font-mono font-bold text-gray-900">{pedido.id}</td>
                  <td className="p-4 font-medium">{pedido.cliente}</td>
                  <td className="p-4 text-gray-500">{pedido.fecha}</td>
                  <td className="p-4 font-semibold text-gray-900">${pedido.total.toFixed(2)}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEstadoEstilo(pedido.estado)}`}>
                      {pedido.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Pedidos