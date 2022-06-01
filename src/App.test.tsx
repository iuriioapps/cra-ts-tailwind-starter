import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders root', () => {
    render(<App />);
    const root = screen.getByText(/App/i);
    expect(root).toBeInTheDocument();
});
