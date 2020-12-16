import user from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';

import { Page, ThemeProvider } from '../app';

/**
 * Using custom wrapper
 */
test('render quantity component', () => {
  render(<Page />, { wrapper: ThemeProvider });

  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass('dark');

  const toggleButton = screen.getByRole('button', { name: /toggle theme/i })
  expect(toggleButton).toBeInTheDocument();
  user.click(toggleButton);

  expect(main).toHaveClass('light');

  user.click(toggleButton);

  expect(main).toHaveClass('dark');
});
