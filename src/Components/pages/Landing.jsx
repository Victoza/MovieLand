import React, { useState,useEffect } from 'react'
import MovieCard from '../MovieCard'
import { searchMovies,getPopularMovies } from '../../services/api'

const Landing = () => {

    const[searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }
    loadPopularMovies()    
    },[])

    const handleSearch = async (e)=>{
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch(err){
            console.log(err)
            setError("Failed to search Movies")
        } finally{
            setLoading(false)
        }
    };
  return (
    <div className='bg-gray-200 p-8'>
    
        {/* Carousel/Slider would do */}

        <form onSubmit={handleSearch} className='flex justify-center gap-2'>
            <input type="text" placeholder='Search for movies...'
             value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value )}
             className='bg-white w-64 p-4 rounded-2xl' />
            <button className='p-4 bg-red-600 rounded-2xl cursor-pointer'>Search</button>
        </form>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 justify-items-center'>
            {movies.map((movie)=>(
               movie.title.toLocaleLowerCase().startsWith(searchQuery)  && <MovieCard movie={movie} key={movie.id}/>
            ))}

        </div>
        
    </div>
  )
}

export default Landing