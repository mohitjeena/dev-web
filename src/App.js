
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contact from './components/Contact';
import Service from "./components/Service"
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Router>
 <Navbar />
 <Routes>
  <Route path='/dev-web' element={<Home />}/>
  <Route path='/dev-web/service' element={<Service />}/>
  <Route path='/dev-web/about' element={<About />}/>
  <Route path='/dev-web/contact' element={<Contact />}/>
 </Routes>
 <Footer />
 </Router>
    </div>
  );
}

export default App;
