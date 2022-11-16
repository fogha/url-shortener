/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProviderTest } from '../../tests/utils';

import Statistics from '../AdvancedStatistics';

describe('Statistics', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <Statistics />
      </ProviderTest>
    );

    expect(screen.getByText('Advanced Statistics')).toBeInTheDocument();
    expect(screen.getByText('Brand Recognition')).toBeInTheDocument();
    expect(screen.getByText('Detailed Records')).toBeInTheDocument();
    expect(screen.getByText('Fully Customizable')).toBeInTheDocument();
  });
});