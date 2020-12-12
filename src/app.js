import { createContext, useContext, useState } from 'react';

import { Quantity } from './quantity';

import './app.css';

const initialTheme = 'dark';
const themeCtx = createContext(initialTheme);
const { Provider: ThemeProvider } = themeCtx;

function Page({ children }) {
  const theme = useContext(themeCtx);

  return (
    <main className={theme}>
      <Quantity />
      {children}
    </main>
  );
}

export function App() {
  const [theme, setTheme] = useState(initialTheme);

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider value={theme}>
      <Page>
        <br/>
        <button onClick={handleClick}>Toggle theme</button>
      </Page>
    </ThemeProvider>
  );
}
