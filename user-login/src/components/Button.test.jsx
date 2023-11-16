import {render,screen} from `@testing-library/react`
import Button from `./Button`;
import { describe, expect, it, vi } from "vitest";
import { fireEvent } from "@testing-library/react";
 
describe('Button', () => {
    it('should render the Button', () => {
      render(<Button />);
      screen.debug()
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it('should render the Disabled Button', () => {
        render(<Button disabled= {true}/>);
        screen.debug()
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it('should be able to click', () => {
       const func = vi.fn()
       render(<Button onClick={func} disabled={false}>Hey</Button>);
       fireEvent.click(screen.getByRole('button'))
       expect(func).toHaveBeenCalledOnce()
    });

    it('should render the text', () => {
      const buttonText = 'Click me';
      render(<Button text={buttonText} />);
      const buttonElement = screen.getByText(buttonText);
      expect(buttonElement).toBeInTheDocument();

   });
      
  });