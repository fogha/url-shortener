import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

interface ProviderTestProps {
  children: ReactNode;
}

export const ProviderTest: FC<ProviderTestProps> = ({ children }) => {
  return (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

