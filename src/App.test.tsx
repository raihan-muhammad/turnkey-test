import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders turnkey test text', () => {
  render(<App />);
  const headingElement = screen.getByText(/Turnkey Test/i);
  expect(headingElement).toBeInTheDocument();
});
