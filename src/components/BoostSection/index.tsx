import styled from 'styled-components'
import PrimmaryButton from '../buttons/PrimaryButton';
import { theme } from '../../styles/theme';
import IconButtons from '../buttons/SocialMediaButtons';

const bg_desktop = require('../../assets/bg-shorten-desktop.svg').default;

const StyleContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary_dark_violet};
  background-image: url(${bg_desktop});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  height: 220px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;

  h2 {
    color: ${theme.colors.white};
    font-size: 48px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 28px
    }
  }


`;

const Boost = () => {
  return (
    <StyleContainer>
      <h2>Boost your links today</h2>
      <PrimmaryButton label="Get Started" onClick={() => console.log('Sign up')} link="#" size='m' />
    </StyleContainer>
  )
}

export default Boost;
