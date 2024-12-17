import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com/?apikey=a7aea976';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('Superman');  // Store the search query

  // Function to search for movies by title
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log("data", data);
    console.log("search", data.Search);

    setMovies(data.Search);
  };

  // Call searchMovies with 'spiderman' on initial load
  useEffect(() => {
    searchMovies('spiderman');
    console.log("movies", movies);
  }, []);

  return (
    <div className="app">
      <h1>kryptic</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchQuery}  // Bind the input value to searchQuery
          onChange={(e) => setSearchQuery(e.target.value)}  // Update the searchQuery state
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchQuery)}  // Trigger the search when clicked
        />
      </div>

      <div className="container">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default App;
