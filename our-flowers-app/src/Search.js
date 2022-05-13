import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Component } from 'react';
import { useEffect, useState } from 'react'; //import React Component


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



function PillFilter() {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filteredPosts = filterPosts(tagValues, query);
    return (
        <div>
            <p style={{ color: 'white' }} className="sugg">Suggested Tags:</p>
            <ul>
                {filteredPosts.map((tag) => (
                    <button className="pill" key={tag.id}>{tag.name}</button>
                ))}

            </ul>

        </div>

    )
}

// function SearchBar() {
//     return (
//         <form action="/" method="get">


//             <input
//                 type="text"
//                 id="header-search"
//                 placeholder="search"
//                 name="s"
//                 onChange={searchTyped}
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
    const [galTag, setTagInp] = useState("");
    const [galleryResults, getGalleryResults] = useState([]);
    const searchTyped = e => {
        setTagInp(e.target.value);
    };

    useEffect(() => {
        const galleryResults = props.info.filter(imgTag =>
            (imgTag.tag + '').indexOf('' + galTag) > -1
        );
        getGalleryResults(galleryResults);
    }, [galTag, props.info]);

    return (
        <div>

            <form action="/" method="get">


                <input
                    type="text"
                    id="header-search"
                    placeholder="search"
                    name="s"
                    onChange={searchTyped}
                />
                <button type="submit" id='cancel-button'>cancel</button>

            </form>

            <PillFilter />

        </div>
    );
}

