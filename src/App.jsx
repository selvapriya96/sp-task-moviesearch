import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailsPage from './DetailsPage'
import HomePage from './HomePage'
import Favourites from './Favourites'

function App() {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (movie) => {
    const exists = favourites.find((m) => { m.imdbID === movie.imdbID });
    if (!exists) {
      setFavourites([...favourites, movie]);
    }

  }
  const removeFavourite = (id) => {
    setFavourites(favourites.filter((m) => { m.imdbID !== id }));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage addfavourite={addFavourite} />} />
        <Route path='/details/:id' element={<DetailsPage addfavourite={addFavourite} />} />
        <Route path="/Favourites" element={<Favourites removeFavourite={removeFavourite} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App