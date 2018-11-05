import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import Search from './Search';
import ResultItem from './ResultItem';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '', results: [], hasError: false };
  }

  componentDidMount() {
    const query = this.props.match.params.query;
    const apiKey = 'd6b637dd01a4fd4973a57e472049b96a';
    const url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + query + '&api_key=' + apiKey + '&format=json'
      
    try {
      axios.get(url)
        .then(resp => {
          this.setState({ results: resp.data.results.artistmatches.artist})
          if(resp.data.results.artistmatches.artist.length === 0) {
            this.setState({ hasError: true})
          }
          this.check();
        })
      } catch (e) {
          console.log(e)   
      } 
  }

    componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        this.componentDidMount();
      }
    }

    check() {
    if((this.state.results.length === 0) && (this.state.hasError: false)) {
      return {__html: 'Такого исполнителя не существует!'};
    } else {
      return {__html: ''};
    }
  }
  
  render() {

    const resultItem = this.state.results.map(function (item, index) {
      return (

        <ResultItem key={index} item={item} index={index} />
      )
    })
    
    return (
      <div className="App">
       <Header/>

          <div className="row pt-3">
            <div className="col-md-12">
              <Search searchQuery={this.props.match.params.query} />
            </div>
          </div>

          
            <div className="col-12">

              <div className="row resultsRow pt-2">
              <div className="col-md-12" dangerouslySetInnerHTML={this.check()} />
              
                {resultItem} 
              
              </div>
            </div>

      </div>
    );
  }
}

export default SearchResults;
