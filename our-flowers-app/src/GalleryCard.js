// import React, {useEffect, useState } from 'react'; //import React Component
// import{Redirect} from 'react-router-dom';
import { Button } from 'reactstrap';

function GalleryCard(props) {
  const tagValues = [
    { id: 1, name: 'big nose' },
    { id: 2, name: 'bushy eyebrows' },
    { id: 3, name: 'gapped teeth' },
    { id: 4, name: 'heterochromia' },
    { id: 5, name: 'hairy arms' },
    { id: 6, name: 'heterochromia' },
    { id: 7, name: 'chin acne' },
    { id: 8, name: 'textured skin' },
    { id: 9, name: 'rosacea' },
    { id: 10, name: 'hooded eyes' },
    { id: 11, name: 'brown skin' }
  ];
  //render individual card for one gallery image
  return (
    <div key={props.gal.galid} className="card">
      <img className="card-img-top" src={props.gal.path} alt={props.gal.imgalt} />
      <div className="card-body">
        {props.gal.tagid.map((currTag, j) =>
          <button key={j} className="pill-version">{tagValues[currTag - 1].name}</button>
        )}
      </div>
    </div>
  );
}

export default GalleryCard;