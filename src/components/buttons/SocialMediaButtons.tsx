import styled from 'styled-components'
import { Twitter, Facebook, Instagram, Pinterest } from '../../assets/svg';

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.dark_violet};
  margin: 10px 10px;
  a {
    color: theme.colors.grayish_violet;
      svg > path {
        fill: ${({ theme }) => theme.colors.white};
      }
  }
  :hover,
  :active {
    a {
      color: theme.colors.grayish_violet;
        svg > path {
          fill: ${({ theme }) => theme.colors.primary_cyan};
      }
    }
  }
`;

const StyleContainer = styled.div``;

const IconButton = () => {
  return (
    <StyleContainer data-testid="icon-buttons">
      <StyledButton>
        <a href='###'>
          <Facebook />
        </a>
      </StyledButton>
      <StyledButton>
        <a href='###'>
          <Twitter />
        </a>
      </StyledButton>
      <StyledButton>
        <a href='###'>
          <Pinterest />
        </a>
      </StyledButton>
      <StyledButton>
        <a href='###'>
          <Instagram />
        </a>
      </StyledButton>
    </StyleContainer>
  )
}

export default IconButton
