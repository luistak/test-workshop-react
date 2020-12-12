import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

// Following this example: https://jestjs.io/docs/en/expect#expectextendmatchers
expect.extend({
  toHaveTextContent() {
    // TODO: Implement
  }
});

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

// Make this test pass!
test('renders counter', async () => {
  render(<Counter />);
  const count = screen.getByText('0');
  userEvent.click(screen.getByRole('button', { name: /click me/i }));

  expect(count).toHaveTextContent('1');
  expect(count).not.toHaveTextContent('2');
});
