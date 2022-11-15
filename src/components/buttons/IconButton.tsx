import { FC } from 'react'
import styled from 'styled-components'
import { Menu } from '../../assets/svg';
import { theme } from '../../styles/theme';

const StyledButton = styled.button`
  background: transparent;
  border: none;
  svg {
    height: 40px;
    width: 40px;
    vertical-align: initial;
    path: {
      color: ${theme.colors.grayish_violet};
    }
  }
`;

const IconButton: FC<{
  icon: string,
  className?: string,
  onClick: () => void,
}> = ({ icon, onClick, className }) => {
  return (
    <StyledButton className={className} onClick={onClick} data-testid="icon-button">
      {icon === 'menu' && (
        <Menu color={theme.colors.grayish_violet} />
      )}
    </StyledButton>
  )
}

export default IconButton
