import { render, fireEvent } from '@testing-library/react';

import { App } from '../app';

/**
 * Using fireEvent
 */
test('render quantity component', () => {
  const { getByLabelText, getByRole } = render(<App/>);

  const input = getByLabelText(/qtd items/i);
  expect(input).toHaveAttribute('type', 'number');
  expect(input).toHaveValue(0);

  fireEvent.change(input, { target: { value: 12 }});

  expect(input).toHaveValue(12);

  const alert = getByRole('alert');
  expect(alert).toHaveTextContent(/invalid quantity/i);
});
