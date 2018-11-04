import React, { Component } from 'react';
import './Header.css'
import logo from '../../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="row">
            <div className="col-md-12 header">
              <img src={logo} className="logo" alt="LastFM Parser"/>
              <h1>LAST<span>FM</span></h1>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
