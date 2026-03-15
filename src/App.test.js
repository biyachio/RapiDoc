// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RapiDocHtml title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RapiDocHtml/i);
    expect(titleElement).toBeInTheDocument();
});
