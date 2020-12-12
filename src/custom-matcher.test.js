import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Counter } from './counter';

// Following this example: https://jestjs.io/docs/en/expect#expectextendmatchers
expect.extend({
  toHaveTextContent(received, text) {
    const pass = received.textContent === text;

    // Using "this.utils": https://jestjs.io/docs/en/expect#thisutils
    const expected = this.utils.printExpected(received);

    if (!pass) {
      return {
        message: () =>
          `expected ${expected} to have text content ${text} but got ${received.textContent}`,
        pass,
      };
    }

    return {
      message: () =>
        `expected ${expected} NOT to have text content ${text} but got ${received.textContent}`,
      pass,
    };
  }
});

test('renders counter', async () => {
  render(<Counter />);
  const count = screen.getByText('0');
  userEvent.click(screen.getByRole('button', { name: /click me/i }));

  expect(count).toHaveTextContent('1');
  expect(count).not.toHaveTextContent('2');
});
