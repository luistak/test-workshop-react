import user from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';

import { App } from '../app';

/**
 * Using screen
 */
test('render quantity component', () => {
  const { rerender } = render(<App/>);

  const input = screen.getByLabelText(/qtd items/i);
  expect(input).toHaveAttribute('type', 'number');
  expect(input).toHaveValue(0);

  user.type(input, '12');

  expect(input).toHaveValue(12);

  const alert = screen.getByRole('alert');
  expect(alert).toHaveTextContent(/invalid quantity/i);

  rerender(<App max={13} />);
  expect(alert).not.toBeInTheDocument();
});
