import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Learnmore from './pages/Learnmore';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>               
        <Routes>
          <Route path = "/" exact element = {<Home/>}/>
          {/* <Route path ="/"  exact element = {<BookingForm/>}/>
          <Route path = "/bookings" exact element = {<BookingsList/>}/> */}
          <Route path = "/about" exact element = {<About/>}/>
          <Route path = "/blog" exact element = {<Blog/>}/>
          <Route path = "/contact" exact element = {<Contact/>}/>
          <Route path = '/about/learnmore' exact element = {<Learnmore/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
