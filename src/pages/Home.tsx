import React, { useState } from 'react';
import styled from 'styled-components'
import { UrlShortenerSection, AdvancedStatistics, NavBar, LandingSection, Boost, Footer, MobileNav } from '../components';

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  .header {
    padding: 0 120px 280px 120px;
    margin-bottom: 160px;

    @media (max-width: 1200px) {
      padding-bottom: 120px;
    }

    @media (max-width: 768px) {
      padding: 0 24px;
    }
  }

  .main {
    background: ${({ theme }) => theme.colors.background};
    padding: 0px 120px;
    padding-bottom: 100px;
    min-height: 85vh;

    @media (max-width: 768px) {
      padding: 0px 24px;
    }
  }

  .footer {
    padding: 0px 120px;
    background: ${({ theme }) => theme.colors.dark_violet};

    @media (max-width: 768px) {
      padding: 0 40px;
    }
  }
`;
export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <HomeContainer data-testid="homePage">
      <header className="header">
        <NavBar onClick={() => setShowModal(true)} />
        <LandingSection />
      </header>

      <div className="main">
        <UrlShortenerSection />
        <AdvancedStatistics />
      </div>

      <Boost />
      <footer className="footer">
        <Footer />
      </footer>
      <MobileNav showModal={showModal} hideModal={() => setShowModal(false)} />
    </HomeContainer>
  )
}
