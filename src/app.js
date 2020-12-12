import React, { useEffect, useState } from 'react';

import { Counter } from './counter';

const MAX = 5;

function reloadThePage() {
  window.location.reload();
}

export function App({ limit = MAX }) {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (count >= limit) {
      setError(true);
    } else {
      setError(false);
    }
  }, [limit, count, setError]);

  const handleCounterChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div>
      <h1>Testing Workshop - React</h1>
      <Counter onChange={handleCounterChange} disabled={error} />
      {error && (
        <>
          <span role="alert">Error! reached limit </span>
          <button data-testid="reset" onClick={reloadThePage}>
            Reset app
          </button>
        </>
      )}
    </div>
  );
}
