import { render } from "@testing-library/react";
import CardMedia from "./CardMedia";
describe("Card media component", () => {
    test("Renders card media component", () => {
        const result = render(<CardMedia  width={200} height={200} />);
        expect(result).not.toBeUndefined();
    });
});
