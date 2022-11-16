import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProviderTest } from '../../tests/utils';

import UserAction from '../BoostSection';

describe('UserAction', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <UserAction />
      </ProviderTest>
    );

    expect(screen.getByText('Boost your links today')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});