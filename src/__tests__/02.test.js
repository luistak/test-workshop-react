import ReactDOM from 'react-dom';
import { App } from '../app';

/**
 * Using Jest-matchers
 */
test('renders App accordingly', () => {
  const div  = document.createElement('div');

  ReactDOM.render(<App />, div);

  const inputId = 'item-quantity';

  const label = div.querySelector('label');
  expect(label).toBeTruthy();
  expect(label).toHaveAttribute('for', inputId);
  expect(label).toHaveTextContent('Qtd Items');

  const input = div.querySelector('input');
  expect(input).toBeTruthy();
  expect(input).toHaveAttribute('id', inputId);
  expect(input).toHaveAttribute('type', 'number');
  expect(input).toHaveValue(0);
});
