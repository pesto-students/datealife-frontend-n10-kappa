import { render } from "@testing-library/react";
import Boxed from "./Boxed";

describe("Boxed component", () => {
    test("Renders box component", () => {
        const result = render(<Boxed>Hi</Boxed>);
        expect(result).not.toBeUndefined();
    });
    test("Box component renders children", () => {
        const { getByTestId } = render(<Boxed>Hi</Boxed>);
        expect(getByTestId("boxed")).toHaveTextContent("Hi");
    });
});
