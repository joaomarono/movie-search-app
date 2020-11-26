import React from 'react'

function SearchMovies() {
  const searchmovies = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form className='form' onSubmit={searchmovies}>
        <label htmlFor='query' className='label'>
          Movie Name
        </label>
        <input
          type='text'
          className='input'
          placeholder='Search for a movie...'
        ></input>
        <button type='submit' className='btn'>
          <div className='btn-text'>Search</div>
        </button>
      </form>
    </>
  )
}

export default SearchMovies
