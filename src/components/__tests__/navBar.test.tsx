/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../tests/utils';
import '@testing-library/jest-dom';

import NavBar from '../navBar';

describe('NavBar', () => {
  it('should display correctly', () => {
    const onClick = jest.fn()
    render(
      <ProviderTest>
        <NavBar
          onClick={onClick}
        />
      </ProviderTest>
    );

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(document.getElementsByClassName('logo')[0]).toBeInTheDocument();
  });
});