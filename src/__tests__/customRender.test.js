import { render, screen } from '@testing-library/react';

import { Cart } from '../app';

/**
 * Make it works using a Wrapper or a customRender
 */
test('order check out', async () => {
  render(<Cart />);

  /**
   * Change only the code above
   */
  const cartLink = screen.getByRole('link', { name: /cart/i });
  expect(cartLink).toBeInTheDocument();

  expect(screen.getByText(/items quantity/i)).toBeInTheDocument();
});
