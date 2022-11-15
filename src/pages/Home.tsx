import React from 'react';
import '../styles/home.scss'
import NavBar from '../components/navBar';
import LandingSection from '../components/LandingSection';

export default function Home() {
  return (
    <div className="home">
      <NavBar onClick={() => { }} />
      <LandingSection />
    </div>
  )
}
