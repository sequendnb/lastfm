import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import SearchResults from './Components/Search/SearchResults';
import NoMatch from './Components/NoMatch'
import * as serviceWorker from './serviceWorker';



ReactDOM.render((

   <BrowserRouter>
    <div className="container pt-3">
    	<Switch>
	    	<Route exact path='/' component={App}/>
	    	<Route exact path='/results/:query' component={SearchResults}/>
	    	<Route component={NoMatch} />
	    </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
