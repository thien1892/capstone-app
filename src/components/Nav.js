import './Nav.css';

function Nav() {

    const listNav = [
        {
            name : "Home",
            link : "#home",
        },
        {
            name : "About",
            link : "#about",
        },
        {
            name : "Order",
            link : "#order",
        }
    ];

    const mapListNav = listNav.map(
        item => {
            return(
                <li>
                    <a href={item.link}>
                        {item.name}
                    </a>
                </li>
            )
        }
    );

    return(
        <ul className="nav-bar">
            {mapListNav}
        </ul>
    );
}

export default Nav;