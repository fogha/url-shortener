import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ProviderTest } from '../../tests/utils';

import MobileNavModal from '../mobileNav/index';

describe('Hero', () => {
  it('should display correctly', () => {
    const hideModal = jest.fn()
    render(
      <ProviderTest>
        <MobileNavModal
          showModal={true}
          hideModal={hideModal}
        />
      </ProviderTest>
    );

    expect(screen.getByTestId('mobileNav')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});