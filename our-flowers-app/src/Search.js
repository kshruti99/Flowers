import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Component } from 'react';
import { useEffect, useState } from 'react'; //import React Component
import Gallery from './Gallery.js';
import GalleryCard from './GalleryCard.js';
import galleryObjects from './galleryObjects.json';
import Scroll from './Scroll';

const galData = require('./galleryObjects.json');


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



// function PillFilter() {

//     const { search } = window.location;
//     const query = new URLSearchParams(search).get('s');
//     const filteredPosts = filterPosts(tagValues, query);

//     //function
//     const filterPics = (tagid) => {
//         return (
//             //loop through galleryObjects
//             //check tagID list
//             //inside tagID you have to check if it contains the tagid I'm filtering for
//             //if so, display it/return it
//             galleryObjects.filter((img) => {

//             }
//             );
//     }


//     return (
//         <div>
//             <p style={{ color: 'white' }} className="sugg">Tags:</p>
//             <ul>
//                 {filteredPosts.map((tag) => (
//                     <button className="pill" key={tag.id}>{tag.name}</button>
//                 ))}

//             </ul>

//         </div>

//     )
// }

// function SearchBar() {
//     return (
//         <form action="/" method="get">


//             <input
//                 type="text"
//                 id="header-search"
//                 placeholder="search"
//                 name="s"
//             />
//             <button type="submit" id='cancel-button'>cancel</button>

//         </form>
//     )
// }

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
    //imported scroll function
    //using the GalleryCard function imported in 
    //useState hook
    const [searchField, setSearchField] = useState("");
    //filter function on the list received from the parents
    //checking for name value (of tag)
    //include function catches for any results that have any of the letters of a tag that are typed into the search bar
    //if it fulfills that query, the details are sent to filteredTags
    const filteredTags = tagValues.filter(
        postTag => {
            return (
                postTag
                    .name
                    .toLowerCase()
                == searchField.toLowerCase()
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    //created function to render the details - wraps GalleryCard component
    //pass in props?
    //called inside return
    function searchList(props) {
        return (
            <Scroll>
                {/* <GalleryCard props={props} /> */}
            </Scroll>
        );
    }

    const [searchResults, getSearchResults] = useState([]);

    // useEffect(() => {
    //     const galPosts = galleryObjects.filter(post =>
    //         (post.tagid).contains(searchResults)
    //     );
    //     getSearchResults(galPosts);
    // }, [searchField]);


    return (
        <div>

            {/* <SearchBar /> */}
            <form action="/" method="get">


                <input
                    type="text"
                    id="header-search"
                    placeholder="search"
                    name="s"
                />
                <button type="submit" id='cancel-button'>cancel</button>

            </form>

            {/* <PillFilter /> */}
            <div>
                <p style={{ color: 'white' }} className="sugg">Tags:</p>
                <ul>
                    {filteredPosts.map((tag) => (
                        <button className="pill" key={tag.id}>{tag.name}</button>
                    ))}

                </ul>

            </div>

            <input
                type="search"
                placeholder="Search Tags"
                //input = value of onChange attribute as the handleChange function
                //onChange sets the value of onChange with setSearchField()
                onChange={handleChange}
            />
            {searchList()}
        </div>
    );
}
