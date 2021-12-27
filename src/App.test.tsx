import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { LoadingStatusText } from './utils/constants';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(LoadingStatusText.Loading);
  expect(linkElement).toBeInTheDocument();
});
