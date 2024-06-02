import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { Footer } from './components/footer/footer'
import { PosterOverlay } from './components/poster-overlay/poster-overlay'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { SaleCellar } from './router/sale-cellar/sale-cellar'
import { Shop } from './router/shop/shop'

export function App() {
    return (
    <>
    <Routes>

      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
      </Route>


    </Routes>
    </>
  )
}
