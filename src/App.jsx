import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import SocialIcons from './components/SocialIcons';
import SectionIndicator from './components/SectionIndicator';
import ScrollDown from './components/ScrollDown';
import MainSection from './components/MainSection';
import ContactForm from './components/ContactForm';
import PortfolioGrid from './components/PortfolioGrid';
import AboutSection from './components/AboutSection';
import HomeSection from './components/HomeSection';

function App() {
  return (
    <div className="App">
      {/* Fixed Elements */}
      <Logo />
      <Navbar />
      <SocialIcons />
      <SectionIndicator />
      <ScrollDown />
      
      {/* Main Sections */}
      <MainSection 
        sectionNumber={1}
        title="Home"
        content="Bem-vindo ao meu portfólio. Aqui você encontrará informações sobre mim e meus projetos."
      >
        <HomeSection />
      </MainSection>
      
      <MainSection 
        sectionNumber={2}
        title="About"
        content="Sou um desenvolvedor apaixonado por tecnologia e inovação. Especializado em desenvolvimento web e mobile."
      >
        <AboutSection />
      </MainSection>
      
      <MainSection 
        sectionNumber={3}
        title="Portfolio"
        content="Explore meus projetos e trabalhos mais recentes. Cada projeto representa uma nova experiência e aprendizado."
      >
        <PortfolioGrid />
      </MainSection>
      
      <MainSection 
        sectionNumber={4}
        title="Contact"
        content="Entre em contato comigo para discutir oportunidades de trabalho ou colaboração."
      >
        <ContactForm />
      </MainSection>
    </div>
  );
}

export default App;
