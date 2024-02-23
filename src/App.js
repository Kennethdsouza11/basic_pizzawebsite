import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
//if we want to have different pages in our app then we need to install and import react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    //for components in react.js they should be given like <Navbar/> and not like this <Navbar><Navbar/>
    //Routes tells we want to deal with only one route at each time
    //exact is used to match the exact path and element is used to tell which component to render to
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" exact element = {<Home/>}/>
          <Route path = "/menu" exact element = {<Menu/>}/>
          <Route path = "/about" exact element = {<About/>}/>
          <Route path = "/contact" exact element = {<Contact/>}/>
        </Routes> 
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
