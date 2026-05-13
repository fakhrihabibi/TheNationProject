import { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-4 text-center">
      <div className="mb-6 text-6xl">404</div>
      <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">Page not found</h1>
      <p className="mt-4 text-lg text-slate-600">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-8 inline-block rounded-lg bg-nationred px-8 py-3 font-semibold text-white transition-all hover:bg-nationorange">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage
