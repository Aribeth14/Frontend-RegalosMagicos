import logo from '../assets/logo.png'

function Home() {
  return (
    <main className="bg-[#fdf6f9] min-h-screen">

      <section className="flex flex-col md:flex-row items-center justify-between px-12 py-20 gap-12 max-w-6xl mx-auto">
        <div className="flex-1">
          <span className="bg-[#f8cdeb] text-[#bd3869] text-xs font-semibold px-4 py-1 rounded-full tracking-wide">
            ✨ Envíos a domicilio
          </span>
          <h1 className="text-4xl font-bold text-gray-700 mt-5 mb-4 leading-tight">
            Sorprende a quien <br />
            <span className="text-[#bd3869]">más quieres</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            Desayunos sorpresa, regalos personalizados y experiencias únicas para cada ocasión especial.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#bd3869] text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Ver catálogo
            </button>
            <button className="border border-[#00b1c1] text-[#00b1c1] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#f0fafb] transition">
              Personalizar regalo
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#fce8f3] rounded-3xl p-10 flex flex-col items-center justify-center">
          <img src={logo} alt="Regalos Mágicos" className="w-64 h-64 object-contain" />
          <div className="mt-5 bg-white rounded-2xl px-5 py-3 flex items-center gap-2 border border-pink-100">
            <div className="w-2 h-2 rounded-full bg-[#00b1c1]"></div>
            <span className="text-xs text-gray-400">Entrega el mismo día disponible</span>
          </div>
        </div>
      </section>

      <section className="px-12 py-10 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-gray-600 mb-8">
          Nuestros <span className="text-[#00b1c1]">favoritos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JcVm-mFXKR4dEuQTFoaciBXFz8k33GSdZA&s', nombre: 'Desayuno Sorpresa', desc: 'Pan artesanal + frutas + café', precio: '$18.00' },
            { img: 'https://www.shutterstock.com/image-photo/beautiful-floral-arrangement-roses-gerbera-260nw-2634603335.jpg', nombre: 'Arreglo Floral', desc: 'Rosas + girasoles + tarjeta', precio: '$24.00' },
            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEJGUpDpteIYx4k8Mxh66yokxLdQqvESjlg&s', nombre: 'Caja Mágica', desc: 'Personalizada con foto y mensaje', precio: '$32.00' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-pink-100 overflow-hidden hover:shadow-md transition">
              <img
                src={item.img}
                alt={item.nombre}
                className="w-full h-36 object-cover"
                onError={e => e.target.src = 'https://via.placeholder.com/400x200?text=Imagen+no+disponible'}
              />
              <div className="p-5">
                <p className="font-semibold text-gray-700 text-sm">{item.nombre}</p>
                <p className="text-xs text-gray-400 mt-1 mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#bd3869] font-bold">{item.precio}</span>
                  <button className="w-8 h-8 rounded-full bg-[#00b1c1] text-white flex items-center justify-center text-lg hover:opacity-80 transition">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-12 py-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {[
            { num: '500+', label: 'Clientes felices' },
            { num: '98%', label: 'Satisfacción' },
            { num: '3 años', label: 'De experiencia' },
          ].map((s, i) => (
            <div key={i} className="bg-[#fce8f3] rounded-2xl p-6 text-center">
              <p className="text-2xl font-bold text-[#bd3869]">{s.num}</p>
              <p className="text-xs text-[#bd3869] opacity-70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Home
