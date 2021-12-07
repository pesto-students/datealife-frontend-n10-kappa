import { render } from "@testing-library/react";
import Bar from "./Bar";

describe("Bar component", () => {
    test("Renders bar component", () => {
        const result = render(<Bar />);
        expect(result).not.toBeUndefined();
    });
});
