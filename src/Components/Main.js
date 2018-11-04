import React, { Component } from 'react';

import Search from './Search/Search';

class App extends Component {

  render() {
    return (
      <div className="App">
      	<div className="row pt-3">
      		<div className="col-md-12">
      			<Search />
      		</div>
      	</div>
      </div>
    );
  }
}

export default App;
