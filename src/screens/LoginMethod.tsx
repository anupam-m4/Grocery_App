function LoginMethod() {
  return (
    <div className="flex h-screen flex-col justify-end bg-gradient-to-b from-rose-50 to-white px-6 pb-10">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Get your groceries
        <br />
        with nectar
      </h1>

      <button
        type="button"
        className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-3 text-left text-gray-900"
      >
        <span aria-hidden="true">🌐</span>
        <span>+880</span>
      </button>

      <p className="mb-4 text-center text-sm text-gray-400">
        Or connect with social media
      </p>

      <button
        type="button"
        className="mb-3 flex items-center justify-center gap-2 rounded-full bg-blue-500 py-4 font-semibold text-white"
      >
        Continue with Google
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-full bg-blue-700 py-4 font-semibold text-white"
      >
        Continue with Facebook
      </button>
    </div>
  )
}

export default LoginMethod
