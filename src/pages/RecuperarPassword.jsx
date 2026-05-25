import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import { useFetch } from '../hooks/useFetch'

function RecuperarPassword() {
  const { fetchDataBackend, loading } = useFetch()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const recuperar = async (dataForm) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/reset`
    await fetchDataBackend(url, dataForm, "POST")
  }

  return (
    <div className="min-h-screen bg-[#fdf6f9] flex items-center justify-center px-4">
      <ToastContainer />
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <div className="w-14 h-14 border-2 border-[#00b1c1] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 bg-white">
            🎁
          </div>
          <h1 className="text-2xl font-bold text-gray-700">¿Olvidaste tu contraseña?</h1>
          <p className="text-gray-400 text-sm mt-1">No te preocupes, te enviaremos un enlace a tu correo</p>
        </div>

        <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-sm">
          <form onSubmit={handleSubmit(recuperar)} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1 block">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="w-full border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#00b1c1] transition"
                {...register("email", { required: "El correo es obligatorio" })}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <button
              disabled={loading}
              className="w-full bg-[#bd3869] text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition mt-2 disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar enlace"}
            </button>
          </form>
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
