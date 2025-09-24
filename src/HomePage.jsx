import axios from 'axios';
import React, { useState } from 'react'
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import Favourites from './Favourites';
const API_KEY = "14952542"
const base_url = "http://www.omdbapi.com/";
function HomePage({ addfavourite, favourites, removeFavourite }) {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const searchMovies = async (query, p = 1) => {
        if (!query) return;
        try {
            const res = await axios.get(`${base_url}?s=${query}&apikey=${API_KEY}&page=${p}`);
            const data = res.data;
            if (data.Response === "True") {
                setMovies(data.Search);
                setPage(p);
                setTotalPages(Math.ceil(data.totalResults / 10));

            } else {
                setMovies([]);
                setTotalPages(1);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            setMovies([]);
            setTotalPages(1);
        }
    }
    return (
        <div>
            <h1 className="p-6 text-2xl text-red-600">Welcome to Movie Search App</h1>

            <Link to= "./favourites">
            <div className="p-4">
                <span className="text-lg font-semibold text-green-600">
                    ⭐ Favourites: {favourites.length}
                </span>
            </div></Link>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for Movies......."
                    className="border p-2 rounded flex-1"
                />
               
                <button onClick={() => searchMovies(query, 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded">
                    SEARCH
                </button>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {movies.map((movie) => (
                    <div key={movie.imdbID} className="border p-2 rounded">
                        <Link to={`/details/${movie.imdbID}`}>
                            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} alt={movie.Title} className="w-full h-64 object-cover mb-2" />
                            <h2 className="text-lg font-semibold">{movie.Title}</h2>
                        </Link>
                        <p className="text-sm text-gray-600">{movie.Year}</p>
                        <p>Details</p>
                        <button onClick={() => addfavourite(movie)} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-red-400">ADD TO FAVOURITE</button>
                    </div>
                ))}
            </div>
            {movies.length > 0 && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={(newPage) => searchMovies(query, newPage)}
                />
            )}


        </div>
    )
}

export default HomePage;