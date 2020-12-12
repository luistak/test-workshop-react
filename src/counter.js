import React, { useEffect, useState } from 'react';

export function Counter({ onChange, initialCount = 0, disabled = false }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [onChange, count]);

  return (
    <div>
      <div data-testid="count" aria-label={`User clicked ${count} times`}>
        {count}
      </div>
      <button
        disabled={disabled}
        data-testid="counter"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
