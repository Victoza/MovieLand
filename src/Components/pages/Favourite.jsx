import React from 'react'

const Favourite = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-10">
      <div className='bg-gray-500 rounded-2xl w-2/4 h-1/4 -mt-12 flex flex-col justify-center items-center p-8'>
        <h2 className='text-red-400 text-2xl font-bold'>No Favourite Movies Yet</h2>
        <p className='text-xl text-white'>Start adding movies to your favourites and they will appear here</p> 
       </div>
    </div>
  )
}

export default Favourite