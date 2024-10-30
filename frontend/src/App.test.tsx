import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders button without click', () => {
  render(<App />);

  const buttonElement = screen.getByText(/click me/i);
  const countText = screen.getByText(/button result: 0/i);
  
  expect(buttonElement).toBeInTheDocument();
  expect(countText).toBeInTheDocument();
});

test('renders button with one click to increment counter', () => {
  render(<App />)

  const buttonElement = screen.getByText(/click me/i);
  
  fireEvent.click(buttonElement);

  expect(buttonElement).toBeInTheDocument();
  expect(screen.getByText(/button result: 1/i)).toBeInTheDocument();
})

test('renders button with two clicks to increment and decrement counter', () => {
  render(<App />)

  const incrementButtonElement = screen.getByText(/click me/i);
  const subtractButtonElement = screen.getByText(/subtract/i);
  
  fireEvent.click(incrementButtonElement);
  fireEvent.click(subtractButtonElement);

  expect(incrementButtonElement).toBeInTheDocument();
  expect(subtractButtonElement).toBeInTheDocument();
  expect(screen.getByText(/button result: 0/i)).toBeInTheDocument();
})