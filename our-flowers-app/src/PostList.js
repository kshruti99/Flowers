import React from 'react';
import { Image } from 'react-bootstrap';
import galleryObject from './galleryObjects.json';
import { Container, Row, Col } from 'reactstrap';
import GalleryCard from './GalleryCard';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";
import UserProfile from './UserProfile';

export default function PostList(props) {

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

    return (
        <Container>
            <Row>
                {props.data.map((gal, i) =>
                    <Col key={gal.galid}>
                        <GalleryCard gal={gal} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}