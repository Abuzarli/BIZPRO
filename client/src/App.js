import React from 'react'
import HOME from './pages/home/index.jsx'
import ADDPRODUCT from './pages/addProduct'
import NAVBAR from './components/navbar/navbar'
import {Route,Routes} from "react-router-dom"

const App = () => {
  return (
    <>
    <NAVBAR/>
    <Routes>
    <Route path='/' element={<HOME/>}/>
    <Route path='/add-product' element={<ADDPRODUCT/>}/>
    </Routes>


    </>
  )
}

export default App
