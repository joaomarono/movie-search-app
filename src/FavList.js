import React, { useEffect, useState } from 'react'
import Header from './Header'
import Movie from './Movie'

function FavList() {
  const [movies, setMovies] = useState([])
  const [objs, setObjs] = useState([])

  async function requestMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=6eb625c54f1a555865858ce6bcf0329d`
    const res = await fetch(url)
    const data = await res.json()
    let obj = data
    setObjs([obj])
    console.log(objs)
    return data
  }
  const getCookie = (name) => {
    if (checkCookie()) {
      // Check if a cookie exist
      let start = document.cookie.indexOf(name + '=') //Go searrch for the name of the cookie
      if (start !== -1) {
        // Search for the cookie name
        start = start + name.length + 1
        let end = document.cookie.indexOf(';', start)
        if (end === -1) {
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
    let ids = getCookie('movies')
    setMovies(ids)
  }, [])

  return (
    <div className='container'>
      <Header title={'Favorite List'} />
      <div className='card-list'>
        {movies &&
          movies.map((movie) => {
            const obj = requestMovie(movie)
            return <Movie movie={obj} key={obj.id}></Movie>
          })}
      </div>
    </div>
  )
}

export default FavList
