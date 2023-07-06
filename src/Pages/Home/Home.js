import React from 'react';
import picture from './../../Img/home_pic.png';
import './style.css';

export default function Home({clickForm}) {
  return (
    <>
      <div className='home'>
        <h1>Генератор паспорта дорожной безопасности</h1>
        Проект "Дом-Школа-Дом" предназначен для генерации паспорта дорожной безопасности учреждения образования, 
        а также для составления маршрута на карте местности.<br />
        Удобный инструмент для сотрудников образовательных органов.<br/>
        <button className='form-button' onClick={clickForm}>Заполнить форму</button>
      </div>
      <img className='bg-pic' alt='bg-pic' src={picture} />
    </>
    
  )
}