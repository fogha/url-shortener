import {FC} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{
  size: string;
  copied?: boolean;
}>`
  border: none;
  width: 100%;
  height: ${({ size }) => size === 's' ? '40px' : '45px'};
  border-radius: ${({ size }) => size === 's' ? '4px' : '8px'};
  background-color: ${({ theme, copied }) => copied ? theme.colors.primary_dark_violet : theme.colors.primary_cyan};
  margin: 6pxpx 12px;
  
  :hover,
  :active {
    background-color: ${({ theme, copied }) => copied ? theme.colors.primary_dark_violet : theme.colors.primary_cyan_light};
  }

  .label {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
  }

  .loading {
    width: 20px;
    height: 20px;
    border-width: 2px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SecondaryButton: FC<{
  label: string,
  onClick: () => void,
  size?: 'm' | 's',
  copied?: boolean,
  loading?: boolean,
  className?: string
}> = ({label, onClick, size = 'm', copied = false, loading, className}) => {
  return (
    <StyledButton className={`secondary-btn-container ${className}`} onClick={onClick} size={size} copied={copied} disabled={copied}>
      {loading ? (
        <div className="spinner-border loading" role="status"/>
      ) : (
        <span className="label">{label}</span>
      )}
    </StyledButton>
  )
}

export default SecondaryButton
