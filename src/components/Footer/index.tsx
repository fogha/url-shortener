import styled from 'styled-components'
import IconButtons from '../buttons/SocialMediaButtons';
import { theme } from '../../styles/theme';
import { Logo } from '../../assets/svg';

const StyleContainer = styled.footer`
  height: auto;
  display: flex;
  margin-top: 40px;
  margin-bottom: 70px;

  .logo {
    color: ${({ theme }) => theme.colors.white};
    flex: 1
  }
  .links {
    display: flex;
    flex: 2
  }
  .wrappers {
    flex: 1;
    display: flex;
    flex-direction: column;
    span {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 20px;
      font-weight: 700;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray};
      font-weight: 500;
      margin: 5px 0;

      :hover {
        color: ${({ theme }) => theme.colors.primary_cyan};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    .logo {
      margin-bottom: 50px;
    }
    .links {
      flex-direction: column;
      align-items: center;
    }

    .wrappers {
      align-items: center;
      margin-bottom: 50px;
    }
  }
`;

const Footer = () => {
  const logo: string = require('../../assets/logo.svg').default;
  const featureLinks = [
    {
      link: "Link Shortening",
      href: "###"
    },
    {
      link: "Branded Links",
      href: "###"
    },
    {
      link: "Analytics",
      href: "###"
    }
  ]

  const resourceLinks = [
    {
      link: "Blogs",
      href: "###"
    },
    {
      link: "Developers",
      href: "###"
    },
    {
      link: "Support",
      href: "###"
    }
  ]

  const companyLinks = [
    {
      link: "About",
      href: "###"
    },
    {
      link: "Our team",
      href: "###"
    },
    {
      link: "Careers",
      href: "###"
    },
    {
      link: "Contact",
      href: "###"
    }
  ]

  return (
    <StyleContainer>
      <div className="logo">
        <Logo color='#fff' />
      </div>
      <div className="links">
        <div className="wrappers">
          <span>Features</span>
          {featureLinks.map(link => (
            <a href={link.href}>{link.link}</a>
          ))}
        </div>
        <div className="wrappers">
          <span>Resources</span>
          {resourceLinks.map(link => (
            <a href={link.href}>{link.link}</a>
          ))}
        </div>
        <div className="wrappers">
          <span>Company</span>
          {companyLinks.map(link => (
            <a href={link.link}>{link.link}</a>
          ))}
        </div>
      </div>
      <IconButtons />
    </StyleContainer>
  )
}

export default Footer;
