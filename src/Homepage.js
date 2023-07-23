import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
// import { Routes, Route} from 'react-router-dom';
import BookingFormVer2 from './components/BookingFormV2';
import Footer from './components/Footer';
import logo from "./icons_assets/logo.png";
import Hero from './components/Hero';
import heroImg from './icons_assets/restauranfood.jpg'
import Highlight from './components/Hightlight';

function HomePage() {
  return (
    <div>
      <Header/>
      <Hero urlImage={heroImg} />
      <Highlight/>
      <Footer urlImage={logo}/>
    </div>
  );
}

export default HomePage;
