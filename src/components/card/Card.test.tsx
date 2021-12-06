import { render } from "@testing-library/react";
import Card from "./Card";
describe("Card component", () => {
    test("Renders card component", () => {
        const result = render(<Card>Card</Card>);
        expect(result).not.toBeUndefined();
    });
    test("Card container should have content Card", () => {
        const { getByTestId } = render(<Card>Card</Card>);
        expect(getByTestId("card-container")).toHaveTextContent("Card");
    });
});
