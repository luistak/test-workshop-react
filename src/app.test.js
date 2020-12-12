import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { App } from './app';

it('should show alert message when counter reaches its limit', async () => {
  render(<App />);
  const count = screen.getByTestId('count');
  expect(count).toBeTruthy();
  expect(count.textContent).toBe('0');

  const button = screen.getByTestId('counter');
  expect(button).toBeTruthy();
  expect(button.textContent).toBe('Click me');
  expect(button.disabled).toBe(false);

  fireEvent.click(button);
  expect(count.textContent).toBe('1');

  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  expect(count.textContent).toBe('5');

  expect(button.disabled).toBe(true);
  const error = screen.getByText('Error! reached limit');
  expect(error).toBeTruthy();

  const resetButton = screen.getByTestId('reset');
  expect(resetButton).toBeTruthy();
  expect(resetButton.textContent).toBe('Reset app');

  fireEvent.click(resetButton);

  expect(window.location.reload).toHaveBeenCalledTimes(1);
});