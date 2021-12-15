
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
        <section id="about">
          <Header />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="skills">
          <Skills />
        </section>
       <section id="contact">
        <Contact />
       </section>
       <Footer /> 
      
      </div>
    </div>
  );
}

export default App;
