import { render } from "@testing-library/react";
import CardInfo from "./CardInfo";
describe("Card info component", () => {
    test("Renders card info component", () => {
        const result = render(<CardInfo alignment="top" imgHeight={200} imgWidth={200} />);
        expect(result).not.toBeUndefined();
    });
});
