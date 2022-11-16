import { FC, useState } from 'react'
import styled from 'styled-components'
import SecondaryButton from '../buttons/SecondaryButtton';

const bg_desktop = require('../../assets/bg-shorten-desktop.svg').default;

const StyleContainer = styled.div<{
  error: boolean
}>`
  background: ${({ theme }) => theme.colors.primary_dark_violet};
  background-image: url(${bg_desktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 24px 50px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    paddin: 12px;
  }

  .form {
    width: 80%;
    margin: 10px;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 0;
    }

    input {
      height: 45px;
      width: 100%;
      border: 2px solid ${({ theme, error }) => error ? theme.colors.secondary_red : theme.colors.white};
      margin: 6px 0;
      border-radius: 5px;
      padding: 0px 20px;
      color: ${({ theme, error }) => error ? theme.colors.secondary_red : theme.colors.grayish_violet};
      font-size: 14px;
      font-weight: 500;

      :active {
        border: none;
      }
    }
  }

    .buttonContainer {
      width: 20%;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  .error {
    margin: 0px;
    padding: 0px;
    color: ${({ theme }) => theme.colors.secondary_red};
    font-style: italic;
    font-size: 14px;
    margin-top: -5px
  }
`;

const ShortenUrlCard: FC<{
  shortenURL: (value: string) => void;
  loading: boolean;
  urlError?: string | null;
  clearError: () => void;
}> = ({ shortenURL, loading, urlError, clearError }) => {

  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const submit = () => {
    if (value.length === 0) return setError(true);
    shortenURL(value)
  }

  const onFocus = () => {
    if (error) {
      setError(false);
    }
    if (urlError) {
      clearError();
    }
  }

  return (
    <StyleContainer error={error} data-testid="shorten-url-form" className="shortenUrl-container">
      <div className="form">
          <input
            value={error ? 'Shorten a link here...' : value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Shorten a link here...'
            onFocus={onFocus}
          />
          {error && (<span className="error">Please add a link</span>)}
          {urlError && (<span className="error">{urlError}</span>)}
      </div>
      <div className="buttonContainer">
        <SecondaryButton label="Shorten it!" onClick={() => submit()} loading={loading} />
      </div>
    </StyleContainer>
  )
}

export default ShortenUrlCard
