import React from 'react'
import Header from './Header'
function About() {
  return (
    <div className='container'>
      <Header title={'About'} />
      <div className='about-info'>
        The main idea is to create an application where you can search for
        movies and select what you want to create a favorite list of movies.
        After you select one movie the id is added to the cookie. Later, when
        you access your favorite movie list we extract the id's from the cookie
        and make a request to the movie api so we can extract some informations
        from the movies we got. We can "check" if we already see the movie by
        clicking in a green button inside the movie component.
        <div className='about-link'>
          <div className='about-link-title'>API</div>:
          https://www.themoviedb.org/
        </div>
        <div className='about-link'>
          <div className='about-link-title'>Github</div>:
          https://github.com/joaomarono
        </div>
        <div className='about-link'>
          <div className='about-link-title'>Tryhackme</div>:
          https://tryhackme.com/p/Kazan
        </div>
      </div>
    </div>
  )
}

export default About
