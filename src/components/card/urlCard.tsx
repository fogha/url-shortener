import { useState, FC } from 'react';
import styled from 'styled-components'
import SecondaryButton from '../buttons/SecondaryButtton';
import { LinkProps } from '../../utils/types';

const StyleContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 65px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  padding: 0 20px;

  .main-url {
    color: ${({ theme }) => theme.colors.dark_violet};
    font-weight: 500;
    flex: 3;
  };

  .secondary-url {
    color: ${({ theme }) => theme.colors.primary_cyan};
    font-weight: 500;
    margin-right: 20px;
    flex: 1
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
      <div className="section">
        <span className="secondary-url">{link.full_short_link}</span>
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
