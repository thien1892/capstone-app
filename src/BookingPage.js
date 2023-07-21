import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
// import { Routes, Route} from 'react-router-dom';

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
    </div>
  );
}

export default BookingPage;
