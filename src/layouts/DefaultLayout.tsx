import { SiteFooter } from '../components/layout/Footer/SiteFooter'
import { SiteHeader } from '../components/layout/Header/SiteHeader'

export function DefaultLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}



