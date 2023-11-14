import {render,screen} from `@testing-library/react`
import App from `../src/App`
import { describe, expect, it } from "vitest";
 
describe('App', () => {
    it('should render the App', () => {
      render(<App />);
      screen.debug()
      const appcontainer = screen.getByTestId("app-container");
      expect(appcontainer).toBeInTheDocument();
    });
  });