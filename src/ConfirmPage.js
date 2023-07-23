import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
// import { Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import logo from "./icons_assets/logo.png";


function ConfirmPage() {
  return (
    <div>
        <Header/>
      <div className='confirm-form-booking'>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <circle cx="25" cy="25" r="25" fill="#FFA500"/>
  <path d="M20.9483 34.129C20.4481 34.129 19.9728 33.9266 19.6227 33.5725L12.544 26.4145C11.8187 25.681 11.8187 24.4669 12.544 23.7334C13.2694 22.9999 14.47 22.9999 15.1953 23.7334L20.9483 29.5509L33.8047 16.5501C34.53 15.8166 35.7306 15.8166 36.456 16.5501C37.1813 17.2836 37.1813 18.4977 36.456 19.2312L22.274 33.5725C21.9238 33.9266 21.4486 34.129 20.9483 34.129Z" fill="white"/>
</svg>
        <h2>Table Reserved</h2>
        <p>"Your Table Awaits: Get Ready to Savor Moments with Little Lemon!"</p>
      </div>
      <Footer urlImage={logo}/>

    </div>
  );
}

export default ConfirmPage;
