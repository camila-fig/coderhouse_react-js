import './App.scss'
import { Footer } from './components/footer/footer'
import { PosterOverlay } from './components/poster-overlay/poster-overlay'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { SaleCellar } from './router/sale-cellar/sale-cellar'

export function App() {
    return (
    <>
    <Navigation />
    <Home />
    <PosterOverlay />
    <SaleCellar />
    <Footer />
    </>
  )
}
