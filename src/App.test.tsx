import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import fetchMock from 'fetch-mock';
import { getData } from './helpers/api';

test('renders heading text', () => {
  render(<App />);
  const headingElement = screen.getByText(/Turnkey Test/i);
  expect(headingElement).toBeInTheDocument();
});

it('Test Request Api Success', () => {
  fetchMock.restore();
  fetchMock.mock(`${process.env.REACT_APP_API_URL}/?results=20`, {
    status: 200,
  });
});
