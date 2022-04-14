import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Component } from 'react';
const tagValues = [
    {id: 1, name: 'big nose'},
    {id: 2, name: 'bushy eyebrows'},
    {id: 3, name: 'gapped teeth'},
    {id: 4, name: 'heterochromia'},
    {id: 5, name: 'hairy arms'}
];

function PillFilter() { 
    return ( 
        <div>
            <p style={{color: 'white'}}>Suggested Tags:</p>
                <ul>
                    {tagValues.map((tag)=>(
                        <button className ="pill" key={tag.id}>{tag.name}</button>
                    ))}
                
                </ul>
            
        </div>
        
    )
}
function SearchBar() { 
    return(
        <form action="/" method="get">
        
        <button type="submit"> <IoIosSearch/></button>
        <input
            type="text"
            id="header-search"
            placeholder="search"
            name="s" 
        />
        <button type="submit">Cancel</button>
        
    </form>
    )
}

export default function Search() {

    return (
        <div>
          
            <SearchBar/>
       
            <PillFilter />
            
        </div>
    );
} 

