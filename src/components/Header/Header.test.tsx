import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("Renders header component", () => {
    const result = render(<Header text="Header" backFunction={jest.fn()} />);
    expect(result).not.toBeUndefined();
    // expect(getByText(/Users/i)).toBeInTheDocument();
  });
});
