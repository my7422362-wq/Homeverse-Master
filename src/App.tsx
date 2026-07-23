import { SiteHeader } from './components/layout/Header/SiteHeader'
import { SiteFooter } from './components/layout/Footer/SiteFooter'
import { HomePage } from './pages/Home/HomePage'
import { PropertyDetailsPage } from './pages/PropertyDetails/PropertyDetailsPage'
import { ArticleDetailPage } from './pages/ArticleDetail/ArticleDetailPage'
import { NotFoundPage } from './pages/NotFound/NotFoundPage'

export function App() {
  const path = window.location.pathname
  const isPropertyPage = path.startsWith('/properties/')
  const isArticlePage = path.startsWith('/articles/')
  const isNotFound = !isPropertyPage && !isArticlePage && path !== '/'

  if (isPropertyPage) {
    const slug = path.replace('/properties/', '')
    return (
      <div className="min-h-screen w-full">
        <SiteHeader />
        <PropertyDetailsPage slug={slug} />
        <SiteFooter />
      </div>
    )
  }

  if (isArticlePage) {
    const slug = path.replace('/articles/', '')
    return (
      <div className="min-h-screen w-full">
        <SiteHeader />
        <ArticleDetailPage slug={slug} />
        <SiteFooter />
      </div>
    )
  }

  if (isNotFound) {
    return (
      <div className="min-h-screen w-full">
        <SiteHeader />
        <NotFoundPage />
        <SiteFooter />
      </div>
    )
  }

  // Home page
  return (
    <div className="min-h-screen w-full">
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </div>
  )
}

