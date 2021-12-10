
import { render } from "@testing-library/react";
import CardActions from "./CardActions";
describe("Card actions component", () => {
    test("Renders card action component", () => {
        const result = render(<CardActions width={200} />);
        expect(result).not.toBeUndefined();
    });
});
