import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div>
      <Nav />
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
