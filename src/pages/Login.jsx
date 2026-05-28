import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { MdVisibility, MdVisibilityOff, MdArrowBack } from 'react-icons/md'
import { ToastContainer } from 'react-toastify'
import { useFetch } from '../hooks/useFetch'
import storeAuth from "../context/storeAuth"
import logo from '../assets/logo.png'

function Login() {
  const [esLogin, setEsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const { fetchDataBackend, loading } = useFetch()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setToken, setRol } = storeAuth()
  const navigate = useNavigate()

  const loginUser = async (dataForm) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/login`
    const response = await fetchDataBackend(url, dataForm, 'POST')
    if (response) {
      setToken(response.token)
      setRol(response.rol)
      navigate('/dashboard')
    }
  }

  const registerUser = async (dataForm) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/registro`
    await fetchDataBackend(url, dataForm, "POST")
  }

  return (
    <div className="min-h-screen bg-[#fdf6f9] flex items-center justify-center px-4">
      <ToastContainer />
      <div className="w-full max-w-md">

        {/* FLECHA DE REGRESO */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-[#bd3869] text-sm font-semibold mb-4 hover:opacity-75 transition"
        >
          <MdArrowBack size={20} />
          Volver al inicio
        </button>

        <div className="text-center mb-8">
          <div className="w-24 h-24 border-2 border-[#00b1c1] rounded-2xl overflow-hidden flex items-center justify-center text-2xl mx-auto mb-4 bg-white">
            <img src={logo} alt="Logo" className="w-full h-full object-cover"></img>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-sm">

          <div className="flex bg-[#fdf6f9] rounded-2xl p-1 mb-8">
            <button
              onClick={() => setEsLogin(true)}
              className={`flex-1 py-2 rounded-xl text-sm font-semibold transition ${
                esLogin ? 'bg-white text-[#bd3869] shadow-sm' : 'text-gray-400'
              }`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setEsLogin(false)}
              className={`flex-1 py-2 rounded-xl text-sm font-semibold transition ${
                !esLogin ? 'bg-white text-[#bd3869] shadow-sm' : 'text-gray-400'
              }`}
            >
              Registrarse
            </button>
          </div>

          {esLogin ? (
            <form onSubmit={handleSubmit(loginUser)} className="flex flex-col gap-4">
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
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#00b1c1] transition pr-10"
                    {...register("password", { required: "La contraseña es obligatoria" })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[#bd3869]"
                  >
                    {showPassword ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <div className="text-right">
                <Link to="/recuperar-password" className="text-xs text-[#00b1c1] hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <button
                disabled={loading}
                className="w-full bg-[#bd3869] text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition mt-2 disabled:opacity-60"
              >
                {loading ? "Iniciando sesión..." : "Iniciar sesión"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#00b1c1] transition"
                  {...register("nombre", { required: "El nombre es obligatorio" })}
                />
                {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Apellido
                </label>
                <input
                  type="text"
                  placeholder="Tu apellido"
                  className="w-full border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#00b1c1] transition"
                  {...register("apellido", { required: "El apellido es obligatorio" })}
                />
                {errors.apellido && <p className="text-red-400 text-xs mt-1">{errors.apellido.message}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Dirección
                </label>
                <input
                  type="text"
                  placeholder="Tu dirección"
                  className="w-full border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#00b1c1] transition"
                  {...register("direccion", { required: "La dirección es obligatoria" })}
                />
                {errors.direccion && <p className="text-red-400 text-xs mt-1">{errors.direccion.message}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Teléfono
                </label>
                <input
                  type="text"
                  placeholder="Tu teléfono"
                  className="w-full border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#00b1c1] transition"
                  {...register("telefono", { required: "El teléfono es obligatorio" })}
                />
                {errors.telefono && <p className="text-red-400 text-xs mt-1">{errors.telefono.message}</p>}
              </div>
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
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full border border-pink-100 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#00b1c1] transition pr-10"
                    {...register("password", { required: "La contraseña es obligatoria" })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[#bd3869]"
                  >
                    {showPassword ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
              </div>
              <button
                disabled={loading}
                className="w-full bg-[#bd3869] text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition mt-2 disabled:opacity-60"
              >
                {loading ? "Registrando..." : "Crear cuenta"}
              </button>
            </form>
          )}

        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Al continuar aceptas nuestros{' '}
          <a href="#" className="text-[#00b1c1] hover:underline">términos y condiciones</a>
        </p>

      </div>
    </div>
  )
}

export default Login
