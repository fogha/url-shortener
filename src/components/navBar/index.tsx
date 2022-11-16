import { FC } from 'react';
import styled from 'styled-components'
import IconButton from '../buttons/IconButton';
import LinkButton from '../buttons/LinkButton';
import PrimaryButton from '../buttons/PrimaryButton';


const StyleContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  .navWrapper {
    display: flex;
    align-items: center;
    flex: 1;

    .logo {
      margin-right: 30px;
      display: flex;
    }
  }

  .linkContainer {
    
    @media (max-width: 768px) {
     display: none;
    }
  }

  .menuIcon {
    display: none;
    transition: all 0.4s;
    
    @media (max-width: 768px) {
     display: inline;
     cursor: pointer;
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  .auth-buttons {
    .signUp-btn {
      margin-left: 10px;
    }

    @media (max-width: 768px) {
     display: none;
    }
  }
`;

const NavBar: FC<{
  onClick: () => void,
}> = ({ onClick }) => {
  const logo: string = require('../../assets/logo.svg').default;

  const links = [
    { title: "Features", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Resources", href: "#" },
  ]

  return (
    <StyleContainer data-testid="navbar">
      <div className='navWrapper'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        {(
          <div className='linkContainer'>
            {links.map(link => (
              <LinkButton key={link.title} label={link.title} onClick={() => console.log('Clicked', link.title)} link={link.href} />
            ))}
          </div>
        )}
      </div>
      <IconButton className="menuIcon" icon='menu' onClick={() => onClick()} />
      {(
        <div className="auth-buttons">
          <LinkButton label="Login" onClick={() => console.log('Login')} link="#" />
          <PrimaryButton label="Sign Up" onClick={() => console.log('Sign up')} link="#" className="signUp-btn" />
        </div>
      )}
    </StyleContainer>
  )
}

export default NavBar;
