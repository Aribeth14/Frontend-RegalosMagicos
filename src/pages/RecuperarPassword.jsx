import { useState } from 'react'
import { Link } from 'react-router-dom'

function RecuperarPassword() {
  const [enviado, setEnviado] = useState(false)

  return (
    <div className="min-h-screen bg-[#fdf6f9] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <div className="w-14 h-14 border-2 border-[#00b1c1] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 bg-white">
            🔐
          </div>
          <h1 className="text-2xl font-bold text-gray-700">Recuperar contraseña</h1>
          <p className="text-gray-400 text-sm mt-1">Te enviaremos un enlace a tu correo</p>
        </div>

        <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-sm">
          {!enviado ? (
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#00b1c1] transition"
                />
              </div>
              <button
                onClick={() => setEnviado(true)}
                className="w-full bg-[#bd3869] text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition mt-2"
              >
                Enviar enlace
              </button>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-[#e8f7f9] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                📩
              </div>
              <h3 className="font-bold text-gray-700 mb-2">¡Correo enviado!</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <Link to="/login" className="text-xs text-[#00b1c1] hover:underline">
            ← Volver a iniciar sesión
          </Link>
        </div>

      </div>
    </div>
  )
}

export default RecuperarPassword
