import React from 'react';

function Album (props) {
  var data = props;
  var poster = data.item.image[3]['#text'];

  if (!poster) {
    var imageUrl = require('../../images/default_cover.png')
  } else {
    imageUrl = poster;
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 text-center pt-3">
      <img src={imageUrl} className="card-img" alt={data.item.name} />
      <small className="grayFont">{data.item.name}</small>
    </div>

  )
}

export default Album;

