import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });

  it("App component renders successfully", () => {});
});
