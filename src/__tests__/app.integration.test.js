import { render } from '@testing-library/react';

/**
 * TODO: Switch between these imports to check if your tests are resilient
 */
import { App } from '../app';
// import { App } from '../app-redux';

/**
 * TODO: Automate every instruction following the @testing-library best practices
 */
test('Order check out', async () => {
  // TODO: Mock necessary api's

  render(<App />);

  // TODO: Assert initial page

  // TODO: Find and navigate to first item details

  // TODO: Add item to cart

  // TODO: Go to Cart

  // TODO: Check out the order and assert its calls

  // TODO: Assert initial page redirect

});
