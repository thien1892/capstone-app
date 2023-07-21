import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
// import { Routes, Route} from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="header">
        <Header/>
        <Nav/>
      </div>
    </div>
  );
}

export default HomePage;
