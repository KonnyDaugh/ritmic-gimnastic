import Navigation from './Navigation';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">RG School</div>
            <Navigation />
        </header>
    );
}

export default Header;