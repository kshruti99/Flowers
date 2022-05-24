import React from 'react';
import { Image } from 'react-bootstrap';
import galleryObject from './galleryObjects.json';
import { Container, Row, Col } from 'reactstrap';
import GalleryCard from './GalleryCard';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";
import UserProfile from './UserProfile';
import PostList from './PostList';

export default function Gallery(props) {
    return (
        <div className="body-color">
            <h1 style={{ color: "#9CAEA9" }}>Gallery</h1>
            {/* <h4 style={{ color: "#A2D7D7" }}>Feed</h4> */}
            <PostList data={props.data} />
        </div>
    );
}