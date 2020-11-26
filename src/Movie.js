import React from 'react'

function Movie({ movie }) {
  const { poster_path, release_date, title, overview, popularity } = movie

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <p>{title}</p>
    </>
  )
}

export default Movie
