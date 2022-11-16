import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../tests/utils';
import '@testing-library/jest-dom';

import Home from '../Home';

describe('Footer', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <Home />
      </ProviderTest>
    );

    expect(screen.getByTestId('homePage')).toBeInTheDocument();
    expect(screen.getByText('More than just shorter links')).toBeInTheDocument();
    expect(screen.getByText("Build your brand's recognition and get detailed insights on how your links are performing.")).toBeInTheDocument()
  });
});