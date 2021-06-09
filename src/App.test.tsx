import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import fetchMock from 'fetch-mock';

test('renders heading text', () => {
  render(<App />);
  const headingElement = screen.getByText(/Turnkey Test/i);
  expect(headingElement).toBeInTheDocument();
});

test('Test request api is success', () => {
  fetchMock.restore();
  fetchMock.mock(`${process.env.REACT_APP_API_URL}/?results=20`, {
    status: 200,
  });
});
