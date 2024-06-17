import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { Shop } from './router/shop/shop'
import { Auth } from './router/auth/auth'
import { Checkout } from './router/checkout'

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home/>}/>
          <Route path='shop/*' element={<Shop/>}/>
          <Route path='auth/' element={<Auth/>}/>
          <Route path='checkout/' element={<Checkout/>}/>
        </Route>
      </Routes>
    </>
  ) 
}
