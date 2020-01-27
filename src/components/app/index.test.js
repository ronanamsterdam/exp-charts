import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/save to reload/i);
  expect(linkElement).not.toBeNull();
});
