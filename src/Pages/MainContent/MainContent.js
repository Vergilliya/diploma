import React from 'react';
import Home from '../Home/Home';
import Passport from '../Passport/Passport';
import CustomMap from '../CustomMap/CustomMap';


export default function MainContent({page, clickForm}) {

  const pages = [<Home clickForm={clickForm}/>, <Passport />, <CustomMap />];

  return (
    <div>
       {pages[page]} 
    </div>
  )
}