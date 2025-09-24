import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const API_KEY = "14952542"
const base_url = "http://www.omdbapi.com/";
function DetailPage() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`${base_url}?i=${id}&apikey=${API_KEY}`);
        setMovie(res.data)
      }
      catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovie();
  }, [id]);
if (!movie) {
  return <p>Loading movie details...</p>;
}

  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4"> {movie.Title} </h2>
        <p className="mb-4"> {movie.Plot}</p>
        <img src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200"
        }
          alt={movie.Title}
          className="mt-4 w-64"
        />
        <p className="text-red-500 mt-2">YEAR: {movie.Year}</p>
        <p className="text-red-500 ">GENRE: {movie.Genre}</p>
        <p className="text-red-500 ">DIRECTOR: {movie.Director}</p>
        <p className="text-red-500 ">ACTORS: {movie.Actors}</p>
        <p className="text-red-500 ">RATING: {movie.imdbRating}</p>
        <p className="text-red-500 ">RELEASED: {movie.Released}</p>
        <p className="text-red-500 ">LANGUAGE: {movie.Language}</p>
        <p className="text-red-500 ">AWARDS: {movie.Awards}</p>
      </div>
    </div>
  );
}

export default DetailPage