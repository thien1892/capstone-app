import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
// import { Routes, Route} from 'react-router-dom';
import BookingForm from './components/BookingForm';

function BookingPage() {
  return (
    <div>
      <h1>
        Booking Page
      </h1>
      <div className="header">
        <Header/>
        <Nav/>
      </div>
      <div className='form-booking'>
        <BookingForm/>
      </div>

    </div>
  );
}

export default BookingPage;
