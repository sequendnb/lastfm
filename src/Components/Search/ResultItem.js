import React from 'react';
import { Link } from 'react-router-dom';

function ResultItem (props) {
  var data = props;
  const index = data.index;
  const item = data.item

  return (

    <div className="col-md-4 col-lg-4 col-sm-6 artistCard" key={index}>
        <Link to={`/artist/${item.name}`}>{item.name}</Link>
        <small className="grayFont"> (Слушателей: {item.listeners})</small>
    </div>

  )
}

export default ResultItem;

