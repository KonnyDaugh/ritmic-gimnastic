import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const getLinkClass = ({ isActive }) =>
        isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navigation">
      <span className="logo">RG School</span>
      <NavLink to="/" end className={getLinkClass}>О школе</NavLink>
      <NavLink to="/gymnasts" className={getLinkClass}>Гимнастки</NavLink>
      <NavLink to="/competitions" className={getLinkClass}>Соревнования</NavLink>
      <NavLink to="/coaches" className={getLinkClass}>Тренеры</NavLink>
      <NavLink to="/gallery" className={getLinkClass}>Галерея</NavLink>
      <NavLink to="/videos" className={getLinkClass}>Видео</NavLink>
    </nav>
  );
}

export default Navigation;