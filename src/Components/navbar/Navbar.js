import React from 'react';
import './style.css';

export default function Navbar({updatePage}) {

  const pages = ['Домашняя страница', 'Паспорт', 'Конструктор маршрутов'];

  return (
    <div>
      <nav>
        <h1 onClick={() => {updatePage(0)}}>Дом-Школа-Дом</h1>
        <ul>
          {pages.map((title, index) => 
            (<li key={index} onClick={() => {updatePage(index)}}><h2>{title}</h2></li>)
          )}
        </ul>
      </nav>
    </div>
  )
}