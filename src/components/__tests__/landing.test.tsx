import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProviderTest } from '../../tests/utils';

import Hero from '../landingSection';

describe('Hero', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <Hero />
      </ProviderTest>
    );

    expect(screen.getByText('More than just shorter links')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText("Build your brand's recognition and get detailed insights on how your links are performing.")).toBeInTheDocument()

  });
});