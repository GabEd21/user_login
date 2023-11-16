import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import user-event for better simulation
import TextBoxInput from './TextBoxInput';
import { describe, expect, it, vi } from 'vitest';

describe('TextBoxInput', () => {
  it('should be rendered', () => {
    render(<TextBoxInput />);
    const textbox = screen.getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  it('should be typed', async () => {
    const func = vi.fn();
    render(<TextBoxInput label="Test Label" type="text" name="test" value="" onChange={func} required />);
    const textbox = screen.getByTestId('textbox')
    await userEvent.type(textbox, 'New Value');   
    expect(func).toHaveBeenCalled();
  });

  it('label should render', () => {
    const labelText = 'Test Label';
    render(<TextBoxInput label={labelText} type="text" name="test" value="" onChange={vi.fn()} required />);
    const labelElement = screen.getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });
});
