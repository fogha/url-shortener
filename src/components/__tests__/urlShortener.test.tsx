/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProviderTest } from '../../tests/utils';

import UrlShortener from '../urlShortener';

describe('UrlShortener', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <UrlShortener />
      </ProviderTest>
    );

    expect(screen.getByTestId('url-shortener')).toBeInTheDocument();
  });
});