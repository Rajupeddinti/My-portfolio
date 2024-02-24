import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar.jsx'
import Home from './componants/Home.js'
import About from './componants/About.js';
import Projects from './componants/Projects.js'
import Contact from './componants/Contact.js';

function App() {
  return (
    <div className="App">
        <Navbar/>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
    </div>
  );
}

export default App;
