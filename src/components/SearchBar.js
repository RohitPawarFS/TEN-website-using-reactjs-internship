import React from 'react';
import './SearchBar.css';
// ,data
export function SearchBar({ placeholder }) {
  return (
     <div className="search">
         <div className="searchInputs">
             <input className="textsearch" type="text" placeholder={placeholder} />
         </div>
     </div> 
  );
}