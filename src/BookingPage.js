import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
// import { Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import logo from "./icons_assets/logo.png";
import BookingFormVer2 from './components/BookingFormV2';

function BookingPage() {
  return (
    <div>
        <Header/>
      <div className='form-booking'>
        <BookingFormVer2/>
      </div>
      <Footer urlImage={logo}/>

    </div>
  );
}

export default BookingPage;
