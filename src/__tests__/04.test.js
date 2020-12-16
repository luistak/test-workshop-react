import ReactDOM from 'react-dom';
// eslint-disable-next-line testing-library/no-dom-import
import { getQueriesForElement } from '@testing-library/dom';

import { App } from '../app';

const render = (Ui) => {
  const container  = document.createElement('div');

  ReactDOM.render(Ui, container);

  const queries = getQueriesForElement(container);

  return {
    container,
    ...queries
  }
}

/**
 * Using a custom render
 */
test('renders App accordingly', () => {
  const { getByLabelText } = render(<App />);

  const input = getByLabelText('Qtd Items');
  expect(input).toBeTruthy();
  expect(input).toHaveAttribute('type', 'number');
  expect(input).toHaveValue(0);
});
