import { Routes, Route } from 'react-router-dom'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { Shop } from './router/shop/shop'
import './App.scss'

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home/>}/>
          {/* <Route path='shop/*' element={<Shop/>}/> */}
        </Route>
      </Routes>
    </>
  )
}
