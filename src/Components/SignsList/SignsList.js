import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import { assets } from '../../Helpers/assetsList';
import './style.css';

export default function SignsList({clickFunc}) {

  return (

    <div className='assets'>
        {assets.map((sign, index) => (
          <Tooltip title={sign.hint}>
            <button className='button-img' key={index} my_key={index} onClick={clickFunc}>
              <img src={sign.img} alt={index} my_key={index} />
            </button>
          </Tooltip>
        ))}
    </div>
  )
}