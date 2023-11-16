import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event'; // Import user-event for better simulation
import App from '../src/App';

describe('App', () => {
  it('should render the App', () => {
    render(<App />);
    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });

  it('should enable the button if two textboxes were typed.', () => {
    render(<App />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');


    userEvent.type(usernameInput, 'user1');
    userEvent.type(passwordInput, 'pass1');

  
    const loginButton = screen.getByRole('button', { name: 'Submit'});

    expect(loginButton).not.toHaveAttribute('disabled');
  });
});
