import user from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';

import { Page, ThemeProvider } from '../app';

function renderWithThemeProvider(Ui, { initialTheme, ...opts } = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
  );

  return render(Ui, { wrapper: Wrapper, ...opts });
}

/**
 * Using customRender
 */
describe('<Page />', () => {
  it('should toggle component', () => {
    renderWithThemeProvider(<Page />);
  
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('dark');
  
    const toggleButton = screen.getByRole('button', { name: /toggle theme/i })
    expect(toggleButton).toBeInTheDocument();
    user.click(toggleButton);
  
    expect(main).toHaveClass('light');
  
    user.click(toggleButton);
  
    expect(main).toHaveClass('dark');
  });

  it('should initialize with the right theme', () => {
    const theme = 'klebin';
    renderWithThemeProvider(<Page />, { initialTheme: theme});
  
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass(theme);
  });
})
