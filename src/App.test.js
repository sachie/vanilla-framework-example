import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import texts from 'utils/texts';
import App from './App';

test('renders App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const titleElement = screen.getByText(texts.common.title);
  expect(titleElement).toBeInTheDocument();

  const subtitleElement = screen.getByText(texts.mainPage.sachie);
  expect(subtitleElement).toBeInTheDocument();
});
