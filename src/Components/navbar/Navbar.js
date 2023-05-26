import React from 'react';
import './navbar.css';

export default function Navbar({updatePage}) {

  const pages = ['Home', 'Map', 'Passport'];

  return (
    <div>
      <nav>
        <h1 onClick={() => {updatePage(0)}}>LOGO</h1>
        <ul>
          {pages.map((title, index) => 
            (<li key={index} onClick={() => {updatePage(index)}}><h2>{title}</h2></li>)
          )}
        </ul>
      </nav>
    </div>
  )
}