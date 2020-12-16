import { render } from '@testing-library/react';

import { App } from '../app';

/**
 * Using rtl
 */
test('renders App accordingly', () => {
  const { getByLabelText } = render(<App />);

  const input = getByLabelText('Qtd Items');
  expect(input).toBeTruthy();
  expect(input).toHaveAttribute('type', 'number');
  expect(input).toHaveValue(0);
});
