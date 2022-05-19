import React, { useState } from 'react';
import Webcam from "react-webcam";
//import storage from './firebase';
import {storage} from "./index"
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// const storage = firebase.storage().ref();


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const webcamRef = React.useRef(null);


    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            // console.log(imageSrc);
            setImage(imageSrc)
        }, [webcamRef, setImage]);

    const handleUpload = () => {
        console.log(image);
        const uploadTask = storage.ref("images/uploads").putString(image , 'data_url');
        uploadTask.on(
          "state_changed",
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child("uploads")
              .getDownloadURL()
              .then(url => {
                setUrl(url);
              });
          }
        );
        setImage(null)
      };

    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == null ? <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != null ?
                    <div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage(null);
                        }}
                            className="webcam-btn">
                            Retake Image</button>
                        {/* <button onClick={(e) => {
                            // e.preventDefault();
                            // setImage(null);
                            handleUpload()
                        }}>
                            Upload</button> */}
                        <button onClick={handleUpload}>Upload</button>
                    </div>
                    :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>
        </div>
    );
};