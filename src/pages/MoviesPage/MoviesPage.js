import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import * as API from '../../services/api';
import routes from '../../routes';

export default class MoviesPage extends Component {
  state = {
    query: '',
    searchFilms: [],
  };

  // componentDidMount() {
  //   // let;
  // }

  onSubmit = query => {
    const { history } = this.props;
    this.setState({ query });
    API.searchMovie(query).then(resData => {
      console.log('resData :', resData);
      this.setState({ searchFilms: resData.data.results });
    });
    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { query, searchFilms } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.onSubmit} />
        <ul>
          {searchFilms.map(el => (
            <li key={el.id}>
              <Link to={`${routes.MOVIES}/${el.id}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
