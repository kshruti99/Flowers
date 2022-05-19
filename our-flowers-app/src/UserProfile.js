import { Button } from 'reactstrap';
import Gallery from './Gallery';
import React, { useEffect, useRef } from "react";
import { WebcamCapture } from './Webcam';

import firebase from "firebase/compat/app";

export default function UserProfile() {
    const currentUser = firebase.auth().currentUser
    console.log(currentUser);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        {/* <div className="card-img-top">
                            <img src='/img/1.png' className='imgsize'></img>
                        </div> */}
                        <div className="card-body">
                            {currentUser.displayName}
                        </div>
                        <div className="card-body">
                            Liked Images
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Button size="medium" color="secondary" aria-label="upload photo button">Upload Photo</Button>
                    <WebcamCapture />
                </div>
                <div className="row">
                    <Gallery/>
                </div>
            </div>
        </div>
    );
} 
