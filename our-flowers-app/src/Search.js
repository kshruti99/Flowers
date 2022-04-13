import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Component } from 'react';

function Hello() { 
    return <h1> Hi Hi testing <IoIosSearch /></h1>;
}

function PillFilter() { 
    return ( 
        <button class ="pill">Hello</button>
    )
}
function SearchBar() { 
    return(
        <form action="/" method="get">
        
        <button type="submit"> <IoIosSearch/></button>
        <input
            type="text"
            id="header-search"
            placeholder="Search"
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
            <h1 style={{ color: "#9CAEA9" }}>Test</h1>
            <PillFilter />
            
        </div>
    );
} 

