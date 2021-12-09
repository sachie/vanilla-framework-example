import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import messages from 'utils/texts';
import App from './App';

test('renders App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const titleElement = screen.getByText(messages.common.title);
  expect(titleElement).toBeInTheDocument();

  const subtitleElement = screen.getByText(messages.mainPage.sachie);
  expect(subtitleElement).toBeInTheDocument();
});
