import React, { useState, useEffect } from 'react'
import Movie from './Movie'
import Header from './Header'

function SearchMovies() {
  const [query, setQuery] = useState('') //Movie Query
  const [movies, setMovies] = useState([]) //Movies that are retrieved from the API
  const [favorites, setFavorites] = useState([]) //Favorite movies list

  const searchmovies = async (e) => {
    // This will use the API and search for a movie giv
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=6eb625c54f1a555865858ce6bcf0329d&language=en-US&query=${query}&page=1&include_adault=false`

    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }

  const setCookie = (name, hours) => {
    let value = JSON.stringify(favorites)
    let expires
    let date = new Date()
    expires = date.setTime(date.getTime() + Number(hours) * 3600 * 1000)
    document.cookie =
      name + '=' + value + '; path=/; expires = ' + date.toHMTString()
  }

  const getCookie = (name) => {
    if (checkCookie()) {
      // Check if a cookie exist
      start = document.cookie.indexOf(name + '=') //Go searrch for the name of the cookie
      console.log(start)
      if (start !== -1) {
        // Search for the cookie name
        start = start + name.length + 1
        end = document.cookie.indexOf(';', start)
        if (end == -1) {
          // If the cookie name-value pair is the last, the cookie string do not have more ';'
          end = document.cookie.length
        }

        let json_str = unescape(document.cookie.substring(start, end))
        let arr = JSON.parse(json_str)
        return arr
      }
    }
    return ''
  }

  const checkCookie = () => {
    //Check if the browser has a cookie
    if (document.cookie.length > 0) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    //This will run on the first render and will get the info from the cookie
    checkCookie()
      ? setFavorites(getCookie('movies'))
      : setCookie('movies', [], 24 * 365 * 10) //10 years
  }, [])

  useEffect(() => {
    // This will trigger render when a element is add to the favorite list of movies
    console.log(favlist)
  }, [favList])

  useEffect(() => {
    //Next Step: No need button, while the user is writing the input the movies will show, use useEffect to search onchange input
    //Whenever the query change, we make a search for movies
  }, query)

  return (
    <div className='container'>
      <Header title={'Movie Search App'} />
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
    </div>
  )
}

export default SearchMovies
