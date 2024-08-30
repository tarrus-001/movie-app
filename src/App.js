import {useState,useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com/?apikey=a7aea976';

const App = () => {
    const [movies, setMovies] = useState([]);


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log("data",data)
        console.log("search",data.Search)

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('superman');
        console.log("movies",movies)

    }, []);
    return (
        <div className="app">
            <h1>krypto-tech</h1>
         <div className="search">
            <input
             placeholder="search for movies"
             value="Spiderman"
             onChange={ () => {}}
             />
             <img
               src={SearchIcon}
               alt="search"
               onClick={() => {}}
               />            
            </div>   
         
         { 
            
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.imdbID}/>
                ) )}
             
        
            </div>
            

         }
        
         </div>
    );
}

export default App;

