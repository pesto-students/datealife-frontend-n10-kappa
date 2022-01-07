import { render } from "@testing-library/react";
import ButtonGroup from "./ButtonGroup";

describe("Button group component", () => {
    test("Renders button group component", () => {
        const result = render(<ButtonGroup>Button group</ButtonGroup>);
        expect(result).not.toBeUndefined();
    });
});
