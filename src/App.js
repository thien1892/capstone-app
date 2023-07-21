import './App.css';
// import Header from './components/Header';
// import Nav from './components/Nav';
import BookingPage from './BookingPage';
import HomePage from './Homepage';
// import BookingForm from './components/BookingForm';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className='nav-link'>HomePage</Link>
        <Link to="/booking" className='nav-link'>BookingPage</Link>
      </nav>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/booking' element= {<BookingPage/>}/>
      </Routes>
      {/* <div className="header">
        <Header/>
        <Nav/>
      </div> */}
    </div>
  );
}

export default App;
