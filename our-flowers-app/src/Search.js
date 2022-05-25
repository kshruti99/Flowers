import React from 'react';
import { useEffect, useState } from 'react'; //import React Component
import PostList from './PostList';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";

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

    const [allGalPosts, setallGalPosts] = useState([]);

    useEffect(() => {
        const allGalPostsRef = firebase.database().ref('galImages/')

        allGalPostsRef.on('value', (snapshot) => {
            const theGalObj = snapshot.val()
            if (theGalObj != null) {
                let galsKeyArr = Object.keys(theGalObj);
                let thegalsArr = galsKeyArr.map((key) => {
                    let galKeyObj = theGalObj[key]
                    galKeyObj.key = key
                    return galKeyObj;
                })
                setallGalPosts(thegalsArr);
            }
            else setallGalPosts([]);
        })
        return function cleanup() {
            allGalPostsRef.off();
        }
    })


    const filteredGalObjs = (searchedTag) => allGalPosts.filter(
        (galObj) => {
            // console.log(galObj);
            //console.log(allGalPosts);
            const set = new Set(galObj.tagid);
            return set.has(searchedTag);
        }
    );

    const [searchField, setSearchField] = useState("");
    const [searchedGalPosts, setSearchedGalPosts] = useState([]);

    useEffect(() => {
        console.log(searchField);
    }, [searchField]);

    function getTagId(searchField) {
        //console.log("inside tagId " + searchField);
        for (let i = 0; i < 11; i++) {
            //console.log(i + "help");
            if (tagValues[i].name == searchField) {
                return "" + tagValues[i].id;
            }
        }
        return -1;


    };


    const handleChange = (e) => {
        setSearchField(e.target.value);
        const store = filteredGalObjs(getTagId(searchField));
        setSearchedGalPosts(store);
        //setSearchField(e.target.value);
        //console.log(searchField + " *");
        //console.log("running getTagID " + getTagId(searchField));
        //        const store = filteredGalObjs(getTagId(searchField));
        // console.log("this one");
        // console.log(store);
        // console.log(searchField);
        // console.log("hi");
        // console.log(filteredGalObjs('3'));
    };



    return (
        <div>

            <input
                type="search"
                placeholder="Search Tags"
                // onKeyPress={(e) => handleChange(e)}
                //input = value of onChange attribute as the handleChange function
                //onChange sets the value of onChange with setSearchField()
                // onKeyPress={(e) => {
                //     if (e.key == "Enter") {
                //         e.preventDefault();
                //         console.log(e.target.value);
                //     }
                // }}
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

            <PostList data={searchedGalPosts} />
        </div>
    );
}

