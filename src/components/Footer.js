import './Footer.css';

function Footer(props) {
    return(
        <footer>
            <div className='footer-componet'>
                <img src={props.urlImage} alt='logo'></img>
            </div>
            <div className='footer-componet'>
                <h2>Doormat Navigation</h2>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Menu</h3>
                <h3>Reservation</h3>
                <h3>Order Online</h3>
                <h3>Login</h3>
            </div>
            <div className='footer-componet'>
                <h2>Contact</h2>
                <h3>Address</h3>
                <h3>Phone number</h3>
                <h3>Email</h3>
            </div>
            <div className='footer-componet'>
                <h2>Social media links</h2>
                <h3>Facebook</h3>
                <h3>Tiktok</h3>
                <h3>Twitter</h3>
            </div>
        </footer>
    )
}

export default Footer;