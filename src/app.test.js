import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { App } from './app';

function doTimes(callback, times) {
  new Array(times).fill().forEach(callback);
}

it('should show alert message when counter reaches its limit', async () => {
  let limit = 5;
  const { rerender } = render(<App />);

  const count = screen.getByLabelText(`User clicked ${0} times`, { name: 0 });
  expect(count).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();

  doTimes(() => {
    userEvent.click(button);
  }, limit);

  expect(count).toHaveTextContent(limit);
  expect(button).toBeDisabled();

  const error = screen.queryByRole('alert');
  expect(error).toBeInTheDocument();
  expect(error).toHaveTextContent(/error! reached limit/i);

  limit = 10;
  rerender(<App limit={limit} />);

  expect(screen.queryByRole('alert')).not.toBeInTheDocument();

  doTimes(() => {
    userEvent.click(button);
  }, limit);

  const resetButton = screen.getByRole('button', { name: /reset app/i });
  expect(resetButton).toBeInTheDocument();

  userEvent.click(resetButton);

  expect(window.location.reload).toHaveBeenCalledTimes(1);
});
