import {FC} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{
  atFooter: boolean;
}>`
  border: none;
  width: '110px';
  height: '40px';
  border-radius: 50px;
  background-color: transparent;
  margin: 10px 10px;
  
  a {
    color: ${({ theme, atFooter }) => atFooter ? theme.colors.gray : theme.colors.grayish_violet};
    font-size: 14px;
    text-decoration: none;
    font-weight: 700;
  }

  :hover,
  :active {
    a {
      color: ${({ theme, atFooter}) => atFooter ? theme.colors.primary_cyan : theme.colors.dark_blue};
    }
  }
`;

const FlatButton: FC<{
  label: string,
  onClick: () => void,
  link: string,
  atFooter?: boolean,
  className?: string
}> = ({label, onClick, link, atFooter = false, className}) => {
  return (
    <StyledButton className={className} onClick={onClick} atFooter={atFooter}>
      <a href={link}>{label}</a>
    </StyledButton>
  )
}

export default FlatButton
