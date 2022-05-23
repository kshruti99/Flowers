import React, { useState } from 'react';
import Webcam from "react-webcam";
import { storage } from "./index"
import { database } from "./index"
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";
import Select from 'react-select';
import { useChecklist } from 'react-checklist';
import { Button, ButtonGroup } from 'react-bootstrap';


import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const WebcamComponent = () => <Webcam />;

const data = [
    { value: 1, label: 'big nose' },
    { value: 2, label: 'bushy eyebrows' },
    { value: 3, label: 'gapped teeth' },
    { value: 4, label: 'heterochromia' },
    { value: 5, label: 'hairy arms' },
    { value: 6, label: 'heterochromia' },
    { value: 7, label: 'chin acne' },
    { value: 8, label: 'textured skin' },
    { value: 9, label: 'rosacea' },
    { value: 10, label: 'hooded eyes' },
    { value: 11, label: 'brown skin' }
];

const videoConstraints = {
    width: 720,
    height: 500,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image, setImage] = useState(null);
    const [uploadingTag, setUploadingTag] = useState([]);
    const [uniqueId, setUniqueId] = useState("");
    const [url, setUrl] = useState("");

    const webcamRef = React.useRef(null);
    const currentUser = firebase.auth().currentUser;
    const [value, setValue] = useState('');


    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            setUniqueId(currentUser.uid + today.getUTCDate() + time + Date.now());
            setImage(imageSrc)
        }, [webcamRef, setImage]);

    const handleUpload = () => {
        console.log("url is " + uniqueId);
        const uploadTask = storage.ref(`images/${uniqueId}`).putString(image, 'data_url');
        uploadTask.on(
            "state_changed",
            () => {
                console.log("looking in storage");
                storage
                    .ref("images")
                    .child(uniqueId)
                    .getDownloadURL()
                    .then(durl => {
                        setUrl(durl);
                        console.log("durl is " + durl);
                        const dbRef = database.ref('galImages/');
                        console.log(uploadingTag);
                        const valueArray = [];
                        valueArray.push(value);
                        const newGalObj = { id: uniqueId, uid: currentUser.uid, path: durl, imgalt: 'image ' + durl, tagid: valueArray }
                        console.log(valueArray);
                        console.log(newGalObj);
                        dbRef.push(newGalObj);
                    });
            }
        );
        setImage(null)
    };


    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const changeHandler = (e) => {
        // React Select return object instead of value for selection
        // return { value: selected };
        console.log(e);
        // console.log(e.target.value);
        const tagIdsUploading = e.map(item => { return item.value })
        console.log('id array');
        console.log(tagIdsUploading);
        setUploadingTag(tagIdsUploading);
        console.log('uploading tags')
        console.log(uploadingTag);
    };

    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == null ? <Webcam
                    className="center"
                    audio={false}
                    height={500}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={720}
                    videoConstraints={videoConstraints}
                /> : <img className="center" src={image} />}
            </div>
            <div>
                {image != null ?
                    <div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            setImage(null);
                        }}
                            className="webcam-btn center">
                            Retake Image</button>
                        <button className="webcam-btn center" onClick={handleUpload}>Upload</button>
                    </div>
                    :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn center">Capture</button>
                }
            </div>
            {/* <Select isMulti value={uploadingTag} options={data} onChange={changeHandler}></Select> */}
            <select value={value} onChange={handleChange}>
                {data.map((currTag) => (
                    <option value={currTag.value}>{currTag.label}</option>
                ))}
            </select>
        </div>
    );
};