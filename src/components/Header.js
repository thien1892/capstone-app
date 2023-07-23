import logo from "../icons_assets/Logo.svg";
import "./Header.css"
import { Routes, Route, Link} from 'react-router-dom';

const listNav = [
    {
        name: "HOME",
        url: '/',
    },
    {
        name: "ABOUT",
        url: '/',
    },
    {
        name: "MENU",
        url: '/',
    },
    {
        name: "RESERVATION",
        url: '/booking',
    },
    {
        name: "ORDER ONLINE",
        url: '/',
    },
    {
        name: "LOGIN",
        url: '/',
    },
];

const mapListNav = listNav.map(
    item => {
        return(
            <div className="header-nav-link">
            <Routes>
                <Route path={item.url}/>
            </Routes>
            <Link to={item.url} className="header-nav-link-item">{item.name}</Link>
            </div>
        )
    }
);

function Header() {
    return(
        <header className="header-component">
            <img src= {logo} alt="logo"/>
            <nav className="header-nav-component">
                {mapListNav}
            </nav>
        </header>
    );
}

export default Header;