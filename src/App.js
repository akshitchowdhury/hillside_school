import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer/Footer';
import Nav from './component/Nav/Nav';
import Home from './component/Home/Home';
import NavHome from './component/Nav/NavHome/NavHome';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import About from './component/About/About';
import Institutions from './component/Group of Institutions/Institutions';

import AluminiAssocn from './component/Alumini Assocn/AluminiAssocn';
import Admission from './component/Admission/Admission';
import Contact from './component/Contact/Contact';
import PrimaryEducation from './component/Research/PrimaryEducation';
import AboutUs from './component/About/AboutUs';
import Faculty from './component/Faculty/Faculty';

function App() {
  return (
    <div className="App overflow-clip">
    
    <Router>
    <Nav/>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About/>} />
  <Route path="/aboutus" element={<AboutUs/>} />
  <Route path="/institutions" element={<Institutions/>} />
  <Route path="/research" element={<PrimaryEducation/>} />
  <Route path="/faculty" element={<Faculty/>} />
  <Route path="/alumni" element={<AluminiAssocn/>} />
  <Route path="/admission" element={<Admission />} />
  <Route path="/contact" element={<Contact/>} />
</Routes>

<Footer/> 
    </Router>
      
    </div>
  );
}

export default App;
