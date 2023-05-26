import React from 'react';
import MyMap from './../../Components/MyMap';
import SignsList from './../../Components/SignsList';
import { useState } from 'react';

export default function CustomMap() {
  
  const [signState, setSignState] = useState(0);

  const clickSign = (e) => {
    const index = e.target.getAttribute('my_key')
    setSignState(index);
  }

  return (
    <div>
        <SignsList clickFunc={clickSign} />
        <MyMap sign={signState} />
    </div>
  )
}