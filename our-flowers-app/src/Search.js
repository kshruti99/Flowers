import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Component } from 'react';
import { useEffect, useState } from 'react'; //import React Component
import Gallery from './Gallery.js';
import GalleryCard from './GalleryCard.js';
import galleryObjects from './galleryObjects.json';

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

const filterPosts = (tagValues, query) => {
    if (!query) {
        return tagValues;
    }

    return tagValues.filter((tag) => {
        const postName = tag.name.toLowerCase();
        return postName.includes(query);
    });
};

export default function Search(props) {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');

    const filteredPosts = filterPosts(tagValues, query);

    const filteredGalObjs = (searchedTag) => galleryObjects.filter(
        (galObj) => {
            // console.log(galObj);
            const set = new Set(galObj.tagid);
            return set.has(searchedTag);
        }
    );

    const [searchField, setSearchField] = useState("");

    function getTagId(searchField) {
        //console.log("inside tagId " + searchField);
        for (let i = 0; i < 11; i++) {
            //console.log(i + "help");
            if (tagValues[i].name == searchField) {
                return tagValues[i].id;
            }
        }
        return -1;


    };

    const handleChange = (e) => {
        setSearchField(e.target.value);
        //console.log(searchField + " *");
        //console.log("running getTagID " + getTagId(searchField));
        const store = filteredGalObjs(getTagId(searchField));
        console.log(store);
    };


    return (
        <div>

            <input
                type="search"
                placeholder="Search Tags"
                //input = value of onChange attribute as the handleChange function
                //onChange sets the value of onChange with setSearchField()
                onChange={handleChange}
            />

            <div>
                <p style={{ color: 'white' }} className="sugg">Tags:</p>
                <ul>
                    {filteredPosts.map((tag) => (
                        <button className="pill" key={tag.id}>{tag.name}</button>
                    ))}

                </ul>

            </div>
        </div>
    );
}

