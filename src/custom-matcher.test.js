import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Counter } from './counter';

// Following this example: https://jestjs.io/docs/en/expect#expectextendmatchers
expect.extend({
  toHaveTextContent() {
    // TODO: Implement
  }
});

// Make this test pass!
test('renders counter', async () => {
  render(<Counter />);
  const count = screen.getByText('0');
  userEvent.click(screen.getByRole('button', { name: /click me/i }));

  expect(count).toHaveTextContent('1');
  expect(count).not.toHaveTextContent('2');
});
