
import { render } from "@testing-library/react";
import ChipStack from "./ChipStack";
import { INTERESTS_VALUES } from "../../const";

describe("Chip stack component", () => {
    test("Renders chip stack component", () => {
        const result = render(<ChipStack chips={INTERESTS_VALUES} />);
        expect(result).not.toBeUndefined();
    });
});
