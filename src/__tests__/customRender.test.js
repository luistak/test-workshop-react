import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Cart, EcommerceProvider } from '../app';

const Wrapper = ({ children }) => (
  <EcommerceProvider>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </EcommerceProvider>
)

// Custom render docs: https://testing-library.com/docs/react-testing-library/setup#custom-render
const customRender = (ui, options) => render(ui, { wrapper: Wrapper, ...options })

/**
 * Make it works using a Wrapper or a customRender
 */
test('order check out', async () => {
  customRender(<Cart />);

  /**
   * Change only the code above
   */
  const cartLink = screen.getByRole('link', { name: /cart/i });
  expect(cartLink).toBeInTheDocument();

  expect(screen.getByText(/items quantity/i)).toBeInTheDocument();
});
