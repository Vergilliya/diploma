import React from 'react';
import { assets } from '../Helpers/assetsList';

export default function SignsList({clickFunc}) {

  return (
    <div className='assets'>
        {assets.map((sign, index) => (
          <button key={index} my_key={index} onClick={clickFunc}>
            <img src={sign.img} alt={index} my_key={index} />
          </button>
        ))}
    </div>
  )
}