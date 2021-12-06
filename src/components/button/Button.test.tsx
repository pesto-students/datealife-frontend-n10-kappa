import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
    test("Renders button component", () => {
        const result = render(<Button>Hi</Button>);
        expect(result).not.toBeUndefined();
    });

    test("Displays text equals hi", () => {
        const { getByTestId } = render(<Button>Hi</Button>);
        expect(getByTestId("button")).toHaveTextContent("Hi");
    });
});
