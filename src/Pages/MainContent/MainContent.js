import React from 'react';
import CustomMap from '../CustomMap/CustomMap';
import Home from '../Home/Home';
import Passport from '../Passport/Passport';


export default function MainContent({page}) {

  const pages = [<Home />, <CustomMap />, <Passport />];

  return (
    <div>
       {pages[page]} 
    </div>
  )
}