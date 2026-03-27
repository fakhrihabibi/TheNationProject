import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-nationink px-4">
          <div className="max-w-md text-center">
            <div className="mb-6 text-6xl">⚠️</div>
            <h1 className="font-display text-3xl font-bold text-nationred sm:text-4xl">
              Oops! Something went wrong
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-8 inline-block rounded-lg bg-nationorange px-8 py-3 font-semibold text-white transition-all hover:bg-nationorange/90"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-8 rounded-lg bg-slate-800 p-4 text-left">
                <p className="text-sm text-red-400">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
