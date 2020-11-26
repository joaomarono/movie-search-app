import React from 'react'
import image from './images/oculos-vr.png'
import SearchMovies from './SearchMovies'

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='header-title'>Movie Search App</div>
        <img className='header-img' src={image} alt=''></img>
      </div>
      <SearchMovies />
    </div>
  )
}

export default App
