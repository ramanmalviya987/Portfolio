
import Navbar from './components/navbar/Navbar';
import './App.css';
import Header from './components/header/Header';
import Project from './components/project/Project'
import Services from './components/services/Services';
import Skills from './components/newSkill/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div  className="App">
      <div className="gradient__bg overflow-hidden">
        <Navbar />
        <Header />
        <Project />
        <Services />
       <Skills />
       <Contact />
       <Footer /> 
      
      </div>
    </div>
  );
}

export default App;
