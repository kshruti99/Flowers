import PostList from './PostList';
import React, { useEffect, useState } from "react";
import { WebcamCapture } from './Webcam';
import {
    NavLink,
    Button
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import galleryObject from './galleryObjects.json';

import firebase from "firebase/compat/app";

export default function UserProfile() {
    const navigate = useNavigate();
    const currentUser = firebase.auth().currentUser

    //allGalPosts is an array of objects structured exactly like galleryObjects.json
    const [myPosts, setallMyPosts] = useState([]);

    useEffect(() => {
        const allGalPostsRef = firebase.database().ref('galImages/')

        allGalPostsRef.on('value', (snapshot) => {
            const theGalObj = snapshot.val()
            if (theGalObj != null) {
                let galsKeyArr = Object.keys(theGalObj);
                let thegalsArr = galsKeyArr.map((key) => {
                    let galKeyObj = theGalObj[key]
                    galKeyObj.key = key
                    return galKeyObj;
                })
                console.log(thegalsArr);

                let myGals = thegalsArr.filter(currPost => currPost.uid == currentUser.uid);
                setallMyPosts(myGals);
            }
            else setallMyPosts([]);
        })
        return function cleanup() {
            allGalPostsRef.off();
        }
    })

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            {currentUser.displayName}
                        </div>
                        <div className="card-body">
                            My Uploads
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Button onClick={() => { navigate('/uploadphoto'); }} size="medium" color="secondary" aria-label="upload photo button">Upload Photo</Button>
                </div>
                <div className="row">
                    <PostList data={myPosts} />
                </div>
            </div>
        </div>
    );
} 
