import React from 'react'
import MovieCard from '../MovieCard'
import { useMovieContext } from '../../contexts/MovieContext'

const Favourite = () => {
  const { favourites } = useMovieContext()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-10">
      {favourites.length === 0 ? (
        <div className="flex justify-center items-center min-h-[70vh]">
          <div className='bg-gray-500 rounded-2xl w-full max-w-2xl flex flex-col justify-center items-center p-8 text-center'>
            <h2 className='text-red-400 text-2xl font-bold'>No Favourite Movies Yet</h2>
            <p className='text-xl text-white'>Start adding movies to your favourites and they will appear here</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,250px)] justify-center gap-x-4 gap-y-8">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favourite
