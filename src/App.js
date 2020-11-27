import React from 'react'
import SearchMovies from './SearchMovies'
import Nav from './Nav'
import FavList from './FavList'
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/list'>
              <FavList />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <SearchMovies />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
