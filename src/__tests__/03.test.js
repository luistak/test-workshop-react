import ReactDOM from 'react-dom';
// eslint-disable-next-line testing-library/no-dom-import
import { getQueriesForElement } from '@testing-library/dom';

import { App } from '../app';

/**
 * Using custom queries
 */
test('renders App accordingly', () => {
  const div  = document.createElement('div');

  ReactDOM.render(<App />, div);

  const { getByLabelText } = getQueriesForElement(div);

  const input = getByLabelText('Qtd Items');
  expect(input).toBeTruthy();
  expect(input).toHaveAttribute('type', 'number');
  expect(input).toHaveValue(0);
});
