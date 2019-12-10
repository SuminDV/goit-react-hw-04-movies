import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import routes from './routes';
import MoviesPage from './pages/MoviesPage/MoviesPage';

export default class App extends Component {
  state = {
    films: [],
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <header>
          <NavLink to={routes.HOME}>Home page</NavLink>
          <NavLink to={routes.MOVIES}> Movies page</NavLink>
        </header>
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
          <Route exact path={routes.MOVIES} component={MoviesPage} />
        </Switch>
      </>
    );
  }
}
