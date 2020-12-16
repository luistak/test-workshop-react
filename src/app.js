import { createContext, useContext, useState } from 'react';

import { Quantity } from './quantity';

import './app.css';

const initialTheme = 'dark';
const themeCtx = createContext(initialTheme);
const { Provider: ThemeProvider } = themeCtx;

function Page({ children, ...props }) {
  const theme = useContext(themeCtx);

  return (
    <main className={theme}>
      <Quantity {...props}/>
      {children}
    </main>
  );
}

export function App(props) {
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
      <Page {...props}>
        <br/>
        <button onClick={handleClick}>Toggle theme</button>
      </Page>
    </ThemeProvider>
  );
}
