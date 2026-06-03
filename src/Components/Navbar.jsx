import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center pl-4 pr-16 py-8 gap-4 bg-black'>
       <div className='flex justify-center items-center'>
            <Link to="/" className='text-blue-500'>Movie Land</Link>
        </div> 
        <div className="flex justify-between gap-4 items-center">
            <Link to="/" className='text-blue-500'>Home</Link>
            <Link to="/favourites" className='text-blue-500'>Favourites</Link>
        </div>
    </nav>
  )
}

export default Navbar