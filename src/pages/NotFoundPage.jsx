import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-nationink px-4">
      <div className="text-center">
        <h1 className="font-display text-9xl font-bold text-nationred">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-nationorange px-8 py-3 font-semibold text-white transition-all hover:bg-nationorange/90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
