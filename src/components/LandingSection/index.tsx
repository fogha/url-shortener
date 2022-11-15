import styled from 'styled-components'
import PrimaryButton from '../buttons/PrimaryButton';

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 100px;
  height: 100%;
  margin-top: 150px;

  .main-body {
    width: 50%;
    height: 100%;
    padding-right: 50px;

    .title {
      font-size: 70px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.dark_violet};
      font-family: ${({ theme }) => theme.font.primary};
      margin: 0px;
      padding: 0px;
    }
    .description {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.grayish_violet};
      font-family: ${({ theme }) => theme.font.primary};
      font-weight: 500;
      margin: 0px;
      padding: 0px;
      margin-bottom: 20px;
    }
  }

  .heroImg-wrapper {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    right: -260px;
    top: 0px;
    bottom: 0px;

    .hero-img {
      height: 480px;
      width: auto;
    }
  }
`;

const LandingSection = () => {
  const logo = require('../../assets/illustration-working.svg').default;
  return (
    <StyleContainer className="hero-container">
      <div className='main-body'>
        <h1 className='title'>More than just shorter links</h1>
        <p className='description'>Sunt velit ex ea irure magna velit esse nulla tempor excepteur eiusmod nostrud incididunt mollit.</p>
        <PrimaryButton label="Get Started" onClick={() => console.log('Sign up')} link="#" size='m' />
      </div>
      <div className='heroImg-wrapper'>
        <img src={logo} alt="hero-Img" className="hero-img" />
      </div>
    </StyleContainer>
  )
}

export default LandingSection;
