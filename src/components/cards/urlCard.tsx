import { useState, FC } from 'react';
import styled from 'styled-components'
import SecondaryButton from '../buttons/SecondaryButtton';
import { LinkProps } from '../../utils/types';
import { theme } from '../../styles/theme';

const StyleContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  padding: 12px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .main-url {
    color: ${({ theme }) => theme.colors.dark_violet};
    font-weight: 500;
    flex: 3;
  };

  .secondary-url {
    color: ${({ theme }) => theme.colors.primary_cyan};
    font-weight: 500;
    flex: 1;

    @media (max-width: 768px) {
      width: 100%;
      margin: 8px 20px;
    }
  }

  .shortenedLinkContainer {
    width: 25%;
    margin-left:12px;

    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
    }
  }

      .urlCard-container {
      flex-direction: column;
      height: auto;
      padding: 0px;
      margin: 10px 0px;

      .main-url {
        padding: 10px 20px;
        border-bottom: 1px solid ${theme.colors.background};
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .section {
        width: 100%;
        padding: 10px 20px; 

        .button {
          margin-top: 10px;
        }
      }
    }
  
`;

const UrlCard: FC<{
  link: LinkProps
}> = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link.full_short_link)
      setCopied(true)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <StyleContainer className="urlCard-container">
      <div className="main-url">{link.original_link}</div>
      <span className="secondary-url">{link.full_short_link}</span>
      <div className='shortenedLinkContainer'>
        <SecondaryButton
          label={copied ? "Copied!" : "Copy"}
          onClick={() => copyToClipboard()}
          size='s'
          className="button"
          copied={copied}
        />
      </div>
    </StyleContainer>
  )
}

export default UrlCard;
