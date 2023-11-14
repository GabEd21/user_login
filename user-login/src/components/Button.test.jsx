import {render,screen} from `@testing-library/react`
import Button from `./Button`;
import { describe, expect, it } from "vitest";
 
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
       const fn = vl.fn()
       render(<Button onClick = {fn}/>);
       
       
       expect(fn).toHaveBeenCalled()
    });
      
  });