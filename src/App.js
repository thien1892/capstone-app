import './App.css';
// import Header from './components/Header';
// import Nav from './components/Nav';
import BookingPage from './BookingPage';
import HomePage from './Homepage';
// import BookingForm from './components/BookingForm';
import { Routes, Route, Link} from 'react-router-dom';

import moment from 'moment'; //"moment": "^2.29.4"
import ConfirmPage from './ConfirmPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/booking' element= {<BookingPage/>}/>
        <Route path='/confirm' element= {<ConfirmPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
