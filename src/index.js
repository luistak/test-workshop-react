import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Counter } from './counter';

ReactDOM.render(
  <StrictMode>
    <Counter />
  </StrictMode>,
  document.getElementById('root')
);
