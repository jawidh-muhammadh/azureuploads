import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'

function App() {


  return (
    <div>

      <Routes>
        <Route path='/' element={ <Homepage /> }  />
        <Route path='/profile' element={<Profile />} />
       
      </Routes>
     
    </div>
  )
}

export default App
