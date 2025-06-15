import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {Home} from './Pages/Home'
import {AddMemory} from './Pages/AddMemory'


const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addmemory' element={<AddMemory/>}/>
      </Routes>
    </div>
  )
}

export default App
