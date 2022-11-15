import React from 'react';
import '../styles/home.scss'
import NavBar from '../components/navBar';
import LandingSection from '../components/LandingSection';
import styled from 'styled-components'
import { UrlShortenerSection } from '../components';

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;

  .header {
    height: 100vh;  
    padding: 0 120px;
  }

  .main {
    background: ${({ theme }) => theme.colors.background};
    padding: 0px 120px;
    padding-bottom: 100px;
    position: relative;
    height: 100vh;
  }

  .wrapper {
    padding: 0px 120px;
  }

  .footer-section {
    padding: 0px 120px;
    background: ${({ theme }) => theme.colors.dark_violet};
  }
`;
export default function Home() {
  return (
    <HomeContainer>
      <header className="header">
        <NavBar onClick={() => { }} />
        <LandingSection />
      </header>

      <div className="main">
        <UrlShortenerSection />
      </div>
    </HomeContainer>
  )
}
