import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer/Footer';
import Nav from './component/Nav/Nav';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App overflow-clip">
      <Nav/>
      <Home/>
      <Footer/> 
    </div>
  );
}

export default App;
