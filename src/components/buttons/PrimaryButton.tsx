import { FC } from 'react';
import { theme } from '../../styles/theme';
import styled from 'styled-components'

const StyledButton = styled.button<{
  size: string;
  isInNav?: boolean;
}>`
  border: none;
  width: ${({ size }) => size === 's' ? '110px' : '170px'};
  height: ${({ size }) => size === 's' ? '40px' : '45px'};
  border-radius: 50px;
  background-color: ${theme.colors.primary_cyan};
  margin: 10px 0;

  :hover,
  :active {
    background-color: ${theme.colors.primary_cyan_light};
  }

  a {
    color: ${theme.colors.white};
    text-decoration: none;
    font-weight: 700;
  }
`;

const PrimmaryButton: FC<{
  label: string,
  onClick: () => void,
  link?: string,
  size?: 'm' | 's';
  className?: string;
  isInNav?: string;
}> = ({ label, onClick, link, size = 's', className = '', isInNav }) => {
  return (
    <StyledButton className={`primary-btn-container ${className} ${isInNav}`} onClick={onClick} size={size} >
      <a href={link}>{label}</a>
    </StyledButton>
  )
}

export default PrimmaryButton
