import React from 'react'
import { MdFavorite } from "react-icons/md";

const MovieCard = ({ movie }) => {

  const Favourite = () => {
    alert("Clicked")
  }

  return (
    <div className='bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-2xl w-[250px]'>

      {/* IMAGE CONTAINER */}
      <div className='relative'>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='w-full h-[380px] object-cover'
        />

        {/* OVERLAY BUTTON */}
        <div className='absolute top-3 right-3'>
          <button
            onClick={Favourite}
            className='bg-black/60 p-2 rounded-full text-red-500 text-2xl cursor-pointer hover:scale-110 transition'
          >
            <MdFavorite />
          </button>
        </div>

      </div>

      {/* MOVIE INFO */}
      <div className='p-4 text-white'>

        <h3 className='font-bold text-lg'>
          {movie.title}
        </h3>

        <p className='text-gray-400 text-sm mt-1'>
          {movie.release_date?.split('-')[0]}
        </p>

      </div>

    </div>
  )
}

export default MovieCard