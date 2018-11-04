import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css'

class Search extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  componentDidMount() {
    const query = this.props.searchQuery;
    if (query) {
      this.setState({ value: query })
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value.substr(0, 140)
    });
  }


  render() {

    return (

      <div className="row">
        <div className="col-12">
          <div className="form-inline">
              <input className="form-control searchField" type="search" placeholder="Введите исполнителя" 
                aria-label="Search" defaultValue={this.state.value}  onChange={this.handleChange}/> 
                <Link className="btn btn-custom" to={`/results/${this.state.value}`}>Искать {this.state.value}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
