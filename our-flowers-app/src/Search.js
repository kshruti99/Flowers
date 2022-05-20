import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Component } from 'react';
import { useEffect, useState } from 'react'; //import React Component
import Gallery from './Gallery.js';
import GalleryCard from './GalleryCard.js';
import galleryObjects from './galleryObjects.json';
import Scroll from './Scroll';

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

//console.log(tagValues[0].name);

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
    //const [searchField, setSearchField] = useState("");
    //filter function on the list received from the parents
    //checking for name value (of tag)
    //include function catches for any results that have any of the letters of a tag that are typed into the search bar
    //if it fulfills that query, the details are sent to filteredTags
    // const filteredTags = tagValues.filter(
    //     postTag => {
    //         return (
    //             postTag
    //                 .name
    //                 .toLowerCase()
    //             == searchField.toLowerCase()
    //         );
    //     }
    // );

    //console.log(filteredTags[0].id);

    // console.log(searchField);


    const filteredGalObjs = (searchedTag) => galleryObjects.filter(
        (galObj) => {
            // console.log(galObj);
            const set = new Set(galObj.tagid);
            return set.has(searchedTag);

            // galObj.tagid.forEach((num) => {
            //     // console.log('current tag in array' + num);
            //     // console.log(tagValues[0].id);
            //     if (num == 2) {
            //         console.log("true herm");
            //         return true;
            //     }
            // })
        }
    );

    const [searchField, setSearchField] = useState("");

    // const searchBar = (searchField) => tagValues.filter(
    //     (idnum) => {
    //         const iden = tagValues[idnum].name
    //         //const iden = tagValues[idnum];
    //         //if (iden == )
    //         //console.log(iden);
    //     }
    // );

    // const match = -1;
    //         for (let i = 0; i < 11; i++) {
    //             console.log(tagValues.length);
    //             console.log(i + "help");
    //             if (tagValues[i].name == searchField) {
    //                 match = tagValues[i].id;
    //             }
    //         }

    function getTagId(searchField) {
        console.log("inside tagId " + searchField);
        for (let i = 0; i < 11; i++) {
            //console.log(tagValues.length);
           console.log(i + "help");
            if (tagValues[i].name == searchField) {
                //return tagValues[i].id;
                return tagValues[i].id;

            } 
        }
        return -1;

        
    };


    // for (let i = 0; i < 11; i++) {
    //     console.log(tagValues.length);
    //     console.log(i + "help");
    //     if (tagValues[i].name == searchField) {
    //         const match = tagValues[i].id;
    //     }
    // }

    ///onsole.log(getTagId("gapped teeth"));
    //console.log(filteredGalObjs(getTagId("gapped teeth")));

    const handleChange = (e) => {
        setSearchField(e.target.value);
        console.log(searchField + " *");
        console.log("running getTagID " + getTagId(searchField));
        const store = filteredGalObjs(getTagId(searchField));
        console.log(store);
    };


    // if (searchInput.length > 0) {
    //     tagValues.filter((nameid) => {
    //         return filteredGalObjs(nameid.id.match(searchInput));
    //     });
    // }


    // tagValues(
    //     // (index) => {
    //     //     const correctID = 0;
    //     //     if (tagValues[index].name == searchField) {
    //     //         correctID = tagValues[index].id;
    //     //     }
    //     //     return filteredGalObjs(correctID);
    //     // }
    // );







    // console.log(filteredGalObjs(5));


    // const handleChange = e => {
    //     setSearchField(e.target.value);
    // };

    //created function to render the details - wraps GalleryCard component
    //pass in props?
    //called inside return
    // function searchList(props) {
    //     return (
    //         <Scroll>
    //             {/* <GalleryCard props={props} /> */}
    //         </Scroll>
    //     );
    // }

    // const [searchResults, getSearchResults] = useState([]);

    // useEffect(() => {
    //     const galPosts = galleryObjects.filter(post =>
    //         (post.tagid) == (searchResults)
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
            {/* {searchList()} */}
        </div>
    );
}
