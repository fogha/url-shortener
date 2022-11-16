import styled from 'styled-components'
import PrimaryButton from '../buttons/PrimaryButton';

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  margin-top: 160px;

  @media( max-width: 768px) {
    flex-direction: column-reverse;
    margin-top: 20px;
  }

  .landing__left {
    width: 55%;
    height: 100%;
    padding-right: 50px;

    @media( max-width: 768px) {
      width: 100%;
      margin-top: 48px;
      text-align: center;
      padding: 0;
    }

    .title {
      font-size: 64px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.dark_violet};
      font-family: ${({ theme }) => theme.font.primary};
      margin: 0px;
      padding: 0px;

      @media( max-width: 1200px) {
        font-size: 48px;
        margin-bottom: 12px;
      }

      @media( max-width: 768px) {
        font-size: 42px;
        margin-bottom: 12px;
      }
    }
    .description {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.grayish_violet};
      font-family: ${({ theme }) => theme.font.primary};
      font-weight: 500;
      margin: 0px;
      padding: 0px;
      margin-bottom: 20px;
    }
  }

  .landing__ImgContainer {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    position: absolute;
    right: -260px;
    top: -40px;
    bottom: 0px;

    @media( max-width: 768px) {
      width: 100%;
      position: relative;
      margin: 0;
      right: -120px;
      top: -20px;
    }

    .landing__img {
      height: 480px;
      width: auto;

      @media( max-width: 1200px) {
        height: 360px;
      }

    }
  }
`;

const LandingSection = () => {
  const logo = require('../../assets/illustration-working.svg').default;
  return (
    <StyleContainer >
      <div className='landing__left'>
        <h1 className='title'>More than just shorter links</h1>
        <p className='description'>Sunt velit ex ea irure magna velit esse nulla tempor excepteur eiusmod nostrud incididunt mollit.</p>
        <PrimaryButton label="Get Started" onClick={() => console.log('Sign up')} link="#" size='m' />
      </div>
      <div className='landing__ImgContainer'>
        <img src={logo} alt="hero-Img" className="landing__img" />
      </div>
    </StyleContainer>
  )
}

export default LandingSection;
