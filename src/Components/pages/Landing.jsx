import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import { searchMovies, getPopularMovies } from "../../services/api";

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-10">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-white mb-3">
          Discover Amazing Movies
        </h1>

        <p className="text-gray-300 text-lg">
          Search thousands of movies and save your favourites.
        </p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center gap-4 mb-12"
      >
        <input
          type="text"
          placeholder="🔍 Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-xl px-6 py-4 rounded-full bg-white shadow-xl outline-none focus:ring-4 focus:ring-blue-500 text-gray-700"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="text-center mb-6">
          <p className="text-red-500 text-lg font-semibold">
            {error}
          </p>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <h2 className="text-white text-2xl font-bold animate-pulse">
            Loading movies...
          </h2>
        </div>
      ) : movies.length === 0 ? (
        /* Empty State */
        <div className="text-center">
          <h2 className="text-gray-300 text-2xl">
            🎬 No movies found.
          </h2>
        </div>
      ) : (
        /* Movies Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Landing;