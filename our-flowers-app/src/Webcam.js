import React, { useState } from 'react';
import Webcam from "react-webcam";
//import storage from './firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// export const storage = firebase.storage();


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image, setImage] = useState(null);
    const webcamRef = React.useRef(null);


    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
        }, [webcamRef, setImage]);

    // const upload = () => {
    //     if (image == null)
    //         return;
    //     storage.ref(`/images/${image.name}`).put(image)
    //         .on("state_changed", alert("success"), alert);
    // }


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage('')
                        }}
                            className="webcam-btn">
                            Retake Image</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage('')
                        }}>
                            Upload</button>
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