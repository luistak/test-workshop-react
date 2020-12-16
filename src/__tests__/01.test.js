import ReactDOM from 'react-dom';
import { App } from '../app';

/**
 * Most fundamental React testing
 */
test('renders App accordingly', () => {
  const div  = document.createElement('div');

  ReactDOM.render(<App />, div);
  // console.log(div.innerHTML);

  const inputId = 'item-quantity';

  const label = div.querySelector('label');
  expect(label).toBeTruthy();
  expect(label.htmlFor).toBe(inputId);
  expect(label.innerHTML).toBe('Qtd Items')

  const input = div.querySelector('input');
  expect(input).toBeTruthy();
  expect(input.id).toBe(inputId);
  expect(input.type).toBe('number');
  expect(input.value).toBe('0');
});
