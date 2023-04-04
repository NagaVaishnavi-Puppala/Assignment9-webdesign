import './App.css';
//import Navbars from './Pages/Layout/Navbar';
import Login from './Login/login';
import Home from './Pages/Home/Home';
import Jobs from './Pages/Jobs/Jobs';
import About from './Pages/AboutUs/About';
import Contact from './Pages/Contact/Contact';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './Main/MainPage';
import {Link}from "react-router-dom"
//import List from './Pages/Layout/List';

function App() {
  return (
    
    <Router>
      {<MainPage/>}
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to = '/'> JOB EASY COMPANY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to = '/home'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to = "/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to = "/jobs">Jobs</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to = "/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

      <Routes>
      <Route path = "/" element = {<Login/>}></Route>
      <Route path = "/home" element = {<Home/>}></Route>
      <Route path = "/about" element = {<About/>}></Route>
      <Route path = "/jobs" element = {<Jobs/>}></Route>
      <Route path = "/contact" element = {<Contact/>}></Route>
      
    

      </Routes>
    </Router>
  );
}

export default App;
