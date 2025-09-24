import React from 'react'

function Favourites({favourites, removeFavourite}) {
    return (
    <div>
      <h2>My Favourites</h2>
      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        favourites.map((movie) => (
          <div key={movie.imdbID}>
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
            <button onClick={() => removeFavourite(movie.imdbID)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}


            export default Favourites