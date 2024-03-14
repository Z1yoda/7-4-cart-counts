import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </>
  )
}

export default App
