import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Nav from './components/nav/Nav';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
