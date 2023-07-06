import React from 'react';
import MyMap from '../../Components/MyMap/MyMap';
import SignsList from '../../Components/SignsList/SignsList';
import { useState } from 'react';
import ManualMap from '../../Components/ManualMap/ManualMap';

export default function CustomMap() {
  
  const [signState, setSignState] = useState(0);

  const [placemarks, setPlacemarks] = useState(JSON.parse(window.localStorage.getItem('placemarks')) || []);

  const editPlacemarks = (newPlacemark) => {
    setPlacemarks(newPlacemark);
  };

  const clickSign = (e) => {
    const index = e.target.getAttribute('my_key');
    setSignState(index);
  };

  const resetRoute = () => {
    setSignState(0);
  };

  return (
    <div>
        <SignsList clickFunc={clickSign}/>
        <MyMap sign={signState} placemarks={placemarks} editPlacemarks={editPlacemarks} resetRoute={resetRoute}/>
        <ManualMap/>
    </div>
  );
}