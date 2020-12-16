import user from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import * as api from '../api';

/**
 * Change between these imports to check if your tests are resilient
 */
import { App } from '../app';
// import { App } from '../app-redux';

beforeAll(() => {
  jest.spyOn(api, 'checkOut');
  jest.spyOn(window, 'alert');
})

afterEach(() => {
  api.checkOut.mockClear();
  window.alert.mockClear();
})

afterAll(() => {
  api.checkOut.mockRestore();
  window.alert.mockRestore();
})

test('order check out', async () => {
  api.checkOut.mockResolvedValue({ success: true });

  render(<App />);

  // Assert initial page
  const heading = screen.getByRole('heading',{ name: /items/i });
  expect(heading).toBeInTheDocument();

  // Find and navigate do first item details
  const items = screen.getAllByTestId('item');
  const firstItem = items[0];
  expect(firstItem).toBeInTheDocument();

  user.click(firstItem);

  // Add item to cart
  const itemInput = screen.getByLabelText(/quantity/i);
  user.type(itemInput, '12');

  const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
  user.click(addToCartButton);

  // Go to Cart
  const cartLink = screen.getByText('Cart');
  user.click(cartLink);

  // Checkout
  const checkOutButton = screen.getByText(/check out/i);
  expect(checkOutButton).toBeInTheDocument();
  user.click(checkOutButton);

  await waitFor(() => expect(api.checkOut).toHaveBeenCalled());
  await waitFor(() => expect(window.alert).toHaveBeenCalledWith('Order created successfully!'));

  // Assert initial page redirect
  expect(screen.getByRole('heading',{ name: /items/i })).toBeInTheDocument();
});
