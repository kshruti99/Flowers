import React from 'react';
import { Image } from 'react-bootstrap';
import galleryObject from './galleryObjects.json';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GalleryCard from './GalleryCard';

export default function Gallery() {

    const tagValues = [
        {id: 1, name: 'big nose'},
        {id: 2, name: 'bushy eyebrows'},
        {id: 3, name: 'gapped teeth'},
        {id: 4, name: 'heterochromia'},
        {id: 5, name: 'hairy arms'},
        {id: 6, name: 'heterochromia'},
        {id: 7, name: 'chin acne'},
        {id: 8, name: 'textured skin'},
        {id: 9, name: 'rosacea'},
        {id: 10, name: 'hooded eyes'},
        {id: 11, name: 'brown skin'}
    ];

    return (
        <div>
            <h1 style={{ color: "#9CAEA9" }}>Gallery</h1>
            <h3 style={{ color: "#A2D7D7" }}>Feed</h3>
            <Container>
                <Row>
                    <Col>
                        {galleryObject.map((gal, i) =>
                            <GalleryCard key={gal.galid} gal={gal} />
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}