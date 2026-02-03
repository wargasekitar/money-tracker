export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-xl">

        {/* LEFT PANEL */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
          <div>
            <h1 className="text-3xl font-bold mb-4 tracking-tight">
              MoneyTrack
            </h1>
            <p className="text-white/80 leading-relaxed">
              Simple, modern, and smart way to track your income
              <br />and expenses every day.
            </p>
          </div>

          <div>
            <p className="text-sm text-white/70 mb-3">
              Don’t have an account yet?
            </p>
            <button className="px-6 py-2 rounded-xl border border-white/40 hover:bg-white/10 transition-all duration-200">
              Register
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-10 bg-white">
          <h2 className="text-2xl font-bold mb-2 tracking-tight">
            Sign In
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Welcome back, please login to your account
          </p>

          <form className="space-y-5">
            <div>
              <label className="text-sm font-medium text-slate-600">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            © {new Date().getFullYear()} MoneyTrack
          </p>
        </div>
      </div>
    </div>
  )
}
