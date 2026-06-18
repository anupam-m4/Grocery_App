function Onboarding() {
  return (
    <div className="flex h-screen flex-col bg-gray-900">
      <div className="flex-1 bg-gray-800" />
      <div className="flex flex-col gap-4 px-6 pb-10 pt-8 text-center text-white">
        <h1 className="text-3xl font-bold">
          Welcome
          <br />
          to our store
        </h1>
        <p className="text-sm text-gray-300">
          Get your groceries in as fast as one hour
        </p>
        <button
          type="button"
          className="mt-4 rounded-full bg-emerald-500 py-4 font-semibold text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Onboarding
