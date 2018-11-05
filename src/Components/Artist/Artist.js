import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Artist.css'
import Header from './../Header/Header';
import Album from './Album';

class Artist extends Component  {

  constructor(props) {
      super(props);
      this.state = { 
        artist: this.props.match.params.artistName,
        albums: [],
        hasError: false
      };
  }

  componentWillMount() {

    const apiKey = 'd6b637dd01a4fd4973a57e472049b96a';
    const url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&autocorrect=1&artist=' + this.state.artist + '&api_key=' + apiKey + '&format=json'; 
  try {
      axios.get(url)
      .then(resp => {
        if (this.isUnmounted) {
          return;
        }
        this.setState({ albums: resp.data.topalbums.album})
        if(resp.data.topalbums.album.length === 0){
          this.setState({ hasError: true })
        }
        this.check();
      }).catch(function (error) {
          if (error.response.status === 400) {
            alert('Нет альбомов!')
          }
          console.log(error)
        });
    } catch (e) {
        console.log(e)   
      }  
  }

  check() {
    if((this.state.albums.length === 0) && (this.state.hasError: false)) {
      return {__html: 'У этого исполнителя нет альбомов на LastFM!'};
    } else {
      return {__html: ''};
    }
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  componentDidCatch(error, info) {
      // Отображение резервного UI
      this.setState({ hasError: true });
      // Вы можете прологировать ошибку с помощью сервиса отчета об ошибках
      console.log(info)
  }

  goBack () {
    window.history.back();
  }

render() {

  const albums = this.state.albums.map(function (item, index) {
      return (
        <Album key={index} item={item} index={index} />
      )
    });

  return (
      <div className="App">
        <Header/>

          <div className="row pt-3">
            <div className="col-md-12">
              <button className="btn btn-custom" onClick={this.goBack} to='/'>К результатам поиска</button>
              <Link to="/" className="btn btn-dark">На главную</Link>
            </div>
            <div className="col-md-12 pt-3">
              <h2 className="artistName">{this.state.artist}</h2>
              <small className="grayFont">Альбомы исполнителя</small>
            </div>
          </div>
          <div className="row pt-3" id="results">
          <div className="col-md-12" dangerouslySetInnerHTML={this.check()} />
            {albums}
          </div>

      </div>
    );
}
    
  
}

export default Artist;
