// import React, {useEffect, useState } from 'react'; //import React Component
// import{Redirect} from 'react-router-dom';
import { Button } from 'reactstrap';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";
import UserProfile from './UserProfile';
import React, { useEffect, useState } from "react";

function GalleryCard(props) {
  const tagValues = [
    { value: 1, label: 'nose' },
    { value: 2, label: 'eyebrows' },
    { value: 3, label: 'teeth' },
    { value: 4, label: 'heterochromia' },
    { value: 5, label: 'arms' },
    { value: 6, label: 'monolid' },
    { value: 7, label: 'chin acne' },
    { value: 8, label: 'textured skin' },
    { value: 9, label: 'rosacea' },
    { value: 10, label: 'hooded eyes' },
    { value: 11, label: 'brown skin' }, 
    { value: 12, label: 'pale skin'}, 
    { value: 13, label: 'vitiligo'}, 
    { value: 14, label: 'mouth'}, 
    { value: 15, label: 'teeth'},
    { value: 16, label: 'upper lip hair'},
    { value: 17, label: 'natural hair'},  
    { value: 18, label: 'straight hair'},  
    { value: 19, label: 'mouth'}, 
    { value: 20, label: 'cystic acne'}
  ];
  // console.log(tagValues);
  console.log(props.gal.tagid);
  console.log(props.gal.tagid.length);
  let t = props.gal.tagid.map((currTag, j) => tagValues[currTag - 1].label);
  // console.log(t);

  return (
    <div key={props.gal.galid} className="card">
      <img className="card-img-top" src={props.gal.path} alt={props.gal.imgalt} />
      <div className="card-body" className="meep">
        {props.gal.tagid.map((currTag, j) =>
          <button key={j} className="pill-version">{tagValues[currTag - 1].label}</button>
        )}
      </div>
    </div>
  );
}

export default GalleryCard;