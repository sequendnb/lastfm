import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header/Header';

class NoMatch extends Component {

  render() {

    return (
      <div className="App">
        <Header/>
        <div className="col-12 pt-3">
          <h4>Такой страницы не существует</h4> 
        </div>
        <div className="col-12 pt-3">
          <Link className="btn btn-dark" to='/'>На главную</Link>
        </div>
      </div>
    );
  }
}

export default NoMatch;
