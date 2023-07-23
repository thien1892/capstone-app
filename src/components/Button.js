import './Button.css';
import { Routes, Route, Link} from 'react-router-dom';
import BookingPage from '../BookingPage';

function Button(props) {

    return(
        <div className='button-component'>
            <Routes>
                <Route path='/booking' element= {<BookingPage/>}/>
            </Routes>
            <Link to="/booking" className='button-component-link'>Reserve a table</Link>

        </div>
    )
}

export default Button;