import React from 'react'

function Favourites(favourites, removeFavourite) {
    return (
    <div>
      <h2>My Favourites</h2>
      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        favourites.map((movie) => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
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