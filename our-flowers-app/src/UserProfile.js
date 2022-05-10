import { Button } from 'reactstrap';
import Gallery from './Gallery';
import React, { useEffect, useRef } from "react";

export default function UserProfile() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const stripRef = useRef(null);

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia({ video: { width: 300 } })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error("error:", err);
        });
    };

    const paintToCanvas = () => {
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");

        const width = 320;
        const height = 240;
        photo.width = width;
        photo.height = height;

        return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        }, 200);
    };

    const takePhoto = () => {
        //edit href here to download to img folder? then upload to firebase here too
        let photo = photoRef.current;
        let strip = stripRef.current;

        console.warn(strip);

        const data = photo.toDataURL("image/jpeg");

        console.warn(data);
        const link = document.createElement("a");
        link.href = data;
        link.setAttribute("download", "myWebcam");
        link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
        strip.insertBefore(link, strip.firstChild);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-img-top">
                            <img src='/img/1.png' className='imgsize'></img>
                        </div>
                        <div className="card-body">
                            Mira
                        </div>
                        <div className="card-body">
                            Liked Images
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Button variant="Light" size="lg" onClick={() => takePhoto()}>
                        {/* onClick={videoRef} */}
                        Upload a Picture
                    </Button>
                    <video onCanPlay={() => paintToCanvas()} ref={videoRef} />
                    <canvas ref={photoRef} />
                    <div>
                        <div ref={stripRef} />
                    </div>
                </div>
                <div className="row">
                    <Gallery/>
                </div>
            </div>
        </div>
    );
} 
