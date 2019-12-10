import React, { Component } from 'react';
import * as API from '../../services/api';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.Reviews(movieId).then(Res => {
      console.log('Res', Res);
      this.setState({ reviews: Res.data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.map(el => (
          <li key={el.id}>
            <p>{el.author}</p>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
