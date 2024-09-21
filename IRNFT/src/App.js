import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import TopSeller from './components/TopSeller';
import LiveAuction from './components/LiveAuction';
import Header from './components/Header';
import ArtworkCard from './components/ArtworkCard';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon'; 
import vaporaart from './assets/vaporaart.jpg'; 
import theangel from './assets/theangel.jpg'; 
import aesthetic from './assets/aesthetic.jpg'; 
import wadafox from './assets/wadafox.jpg';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <LandingSection />
              <TopSeller />
              <LiveAuction />
              <Header />
              <section className="artworks">
                <ArtworkCard img={vaporaart} title="Vaporart" artist="vaporcat art" price="50k❤" />
                <ArtworkCard img={theangel} title="The Angel" artist="Vlad 3D" price="50k❤" />
                <ArtworkCard img={aesthetic} title="Aesthetic" artist="Ilith" price="50k❤" />
                <ArtworkCard img={wadafox} title="Wadafox" artist="scientist art" price="50k❤" />
              </section>
              <HowItWorks />
              <CTA />
            </>
          } />
          <Route path="/coming-soon" element={<ComingSoon />} /> 
          <Route path="/get-started" element={<GetStarted />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
