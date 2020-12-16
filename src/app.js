import { createContext, useContext, useState } from 'react';

import { Quantity } from './quantity';

import './app.css';

const themeCtx = createContext();
const { Provider } = themeCtx;

function useTheme() {
  const context = useContext(themeCtx);
  if (!context) {
    throw new Error('You must use useTheme() withing a <ThemeProvider />')
  }
  
  const { theme, toggleTheme }  = context;
  return [theme, toggleTheme]
}

export function ThemeProvider({ children, initialTheme }) {
  const [theme, setTheme] = useState(initialTheme || 'dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <Provider value={{ theme, toggleTheme }}>
      {children}
    </Provider>
  );
}

export function Page({ children, ...props }) {
  const [theme, toggleTheme] = useTheme();

  return (
    <main className={theme}>
      <Quantity {...props}/>
        <br/>
        <button onClick={toggleTheme}>Toggle theme</button>
    </main>
  );
}

export function App(props) {
  return (
    <ThemeProvider>
      <Page {...props}/>
    </ThemeProvider>
  );
}
