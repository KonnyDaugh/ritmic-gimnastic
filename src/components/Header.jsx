import Navigation from './Navigation';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Your logo</div>
            <Navigation />
        </header>
    );
}

export default Header;