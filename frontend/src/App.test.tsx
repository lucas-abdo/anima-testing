import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders button without click', () => {
  render(<App />);

  const buttonElement = screen.getByText(/click me/i);
  const countText = screen.getByText(/button clicked 0 times/i);
  
  expect(buttonElement).toBeInTheDocument();
  expect(countText).toBeInTheDocument();
});

test('renders button with one click', () => {
  render(<App />)

  const buttonElement = screen.getByText(/click me/i);
  
  fireEvent.click(buttonElement);

  expect(buttonElement).toBeInTheDocument();
  expect(screen.getByText(/button clicked 1 times/i)).toBeInTheDocument();
})