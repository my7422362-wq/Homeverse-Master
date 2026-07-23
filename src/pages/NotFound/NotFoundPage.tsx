import { AlertTriangle } from 'lucide-react'

export function NotFoundPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-16">
      <section className="container">
        <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-12 text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
            <AlertTriangle size={28} className="text-white" />
          </div>
          <h1 className="mt-6 text-3xl md:text-4xl font-semibold">Page Not Found</h1>
          <p className="mt-3 text-white/70">
            The page you're looking for doesn't exist or the link is broken.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/"
              className="pd-btn pd-btn-primary inline-flex items-center gap-2"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

