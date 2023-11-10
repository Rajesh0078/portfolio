import './App.css';
import 'animate.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact"
import { createContext, useState } from 'react';
import Footer from './components/Footer/Footer';
export const store = createContext()


function App() {
  const [activeId, setActiveId] = useState('Home')
  const contextValues = {
    activeId, setActiveId
  }
  return (
    <store.Provider value={contextValues}>
      <div>
        <Header />
        <Home />
        <About />
        <Skills />
        <Education />
        <Work />
        <Contact />
        <Footer />
      </div>
    </store.Provider>
  );
}

export default App;
