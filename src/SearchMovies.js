import React, { useState } from 'react'
import Movie from './Movie'

function SearchMovies() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchmovies = async (e) => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=6eb625c54f1a555865858ce6bcf0329d&language=en-US&query=${query}&page=1&include_adault=false`

    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
    console.log(data.results)
  }

  /*

  Next Step: No need button, while the user is writing the input the movies will show, use useEffect to search onchange input

  useEffect(() => {

   //Sempre que a query for mudada faz re-render

  }, query)



  
*/
  return (
    <>
      <form className='form' onSubmit={searchmovies}>
        <label htmlFor='query' className='label'>
          Movie Name
        </label>
        <input
          type='text'
          className='input'
          name='query'
          placeholder='Search for a movie...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {movies
          .filter((e) => e.poster_path != null)
          .map((movie) => {
            return <Movie movie={movie} key={movie.id} />
          })}
      </div>
    </>
  )
}

export default SearchMovies
