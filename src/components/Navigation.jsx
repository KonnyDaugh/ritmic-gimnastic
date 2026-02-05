import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <span className="logo">RG School</span>
      <ul className="nav-links">
        <li>О школе</li>
        <li>Гимнастки</li>
        <li>Соревнования</li>
        <li>Тренеры</li>
        <li>Галерея</li>
        <li>Видео</li>
      </ul>
    </nav>
  );
}

export default Navigation;