import './App.css'


import React from 'react'
import MovieCard from './Components/MovieCard'
import Landing from './Components/pages/Landing'
import { Route, Routes } from 'react-router-dom'
import Favourite from './Components/pages/Favourite'
import Navbar from './Components/Navbar'
// import New from '../../../NEW/my-frontend-assignment/src/Component/New'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main className=''>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/favourites' element={<Favourite/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App


