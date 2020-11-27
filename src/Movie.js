import React from 'react'

function Movie({ movie }) {
  const {
    poster_path,
    release_date,
    title,
    overview,
    popularity,
    vote_average,
  } = movie

  return (
    <div className='card'>
      <img
        className='card-img'
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title} poster`}
      />
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <p>
          <small>{'Release Date: ' + release_date}</small>
        </p>
        <p>
          <small>{'Rating: ' + vote_average}</small>
        </p>
        <p>{'Description: ' + overview}</p>
      </div>
    </div>
  )
}

export default Movie
