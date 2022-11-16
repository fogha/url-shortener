import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
  render(<App />);
  const titleElement = screen.getByText(/More than just shorter links/i);
  expect(titleElement).toBeInTheDocument();
});
