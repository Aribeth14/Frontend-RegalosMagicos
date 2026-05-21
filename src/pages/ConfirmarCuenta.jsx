import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { useFetch } from '../hooks/useFetch'

function ConfirmarCuenta() {
  const { fetchDataBackend } = useFetch()
  const { token } = useParams()

  const verifyToken = async () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}`
    await fetchDataBackend(url)
  }

  useEffect(() => {
    verifyToken()
  }, [])

  return (
    <div className="min-h-screen bg-[#fdf6f9] flex items-center justify-center px-4">
      <ToastContainer />
      <div className="w-full max-w-md text-center">
        <div className="bg-white rounded-3xl border border-pink-100 p-10 shadow-sm">

          <div className="w-20 h-20 bg-[#fce8f3] rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            🎁
          </div>

          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            ¡Muchas gracias!
          </h2>
          <p className="text-sm text-gray-400 mb-8">
            Tu cuenta ha sido verificada exitosamente. Ya puedes iniciar sesión.
          </p>

          <Link to="/login">
            <button className="w-full bg-[#bd3869] text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition">
              Iniciar sesión
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ConfirmarCuenta
