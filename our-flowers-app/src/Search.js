import React from 'react';
import { useEffect, useState } from 'react'; //import React Component
import PostList from './PostList';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";

const tagValues = [
    { value: 1, label: 'nose' },
    { value: 2, label: 'eyebrows' },
    { value: 3, label: 'teeth' },
    { value: 4, label: 'heterochromia' },
    { value: 5, label: 'arms' },
    { value: 6, label: 'monolid' },
    { value: 7, label: 'chin acne' },
    { value: 8, label: 'textured skin' },
    { value: 9, label: 'rosacea' },
    { value: 10, label: 'hooded eyes' },
    { value: 11, label: 'brown skin' }, 
    { value: 12, label: 'pale skin'}, 
    { value: 13, label: 'vitiligo'}, 
    { value: 14, label: 'mouth'}, 
    { value: 15, label: 'teeth'},
    { value: 16, label: 'upper lip hair'},
    { value: 17, label: 'natural hair'},  
    { value: 18, label: 'straight hair'},  
    { value: 19, label: 'mouth'}, 
    { value: 20, label: 'cystic acne'}

];

const filterPosts = (tagValues, query) => {
    if (!query) {
        return tagValues;
    }

    return tagValues.filter((tag) => {
        const postName = tag.label.toLowerCase();
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
        for (let i = 0; i < tagValues.length; i++) {
            //console.log(i + "help");
            if (tagValues[i].label == searchField) {
                return "" + tagValues[i].value;
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
                        <button className="pill" key={tag.value}>{tag.label}</button>
                    ))}

                </ul>

            </div>

            <PostList data={searchedGalPosts} />
        </div>
    );
}

