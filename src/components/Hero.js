import './Hero.css'
import Button from './Button';

function Hero(props) {
    return(
        <div className='hero'>
            <div className='hero-component'>
                <h2>
                    Little Lemon
                    <h3>Chicago</h3>
                </h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.</h4>
                <Button/>
            </div>

            <div className='hero-component'>
                <img src={props.urlImage} alt='picture of the restaurant'></img>
            </div>
        </div>
    )
}

export default Hero;