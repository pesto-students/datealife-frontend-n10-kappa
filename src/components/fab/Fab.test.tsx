import { render } from "@testing-library/react";
import Fab from "./Fab";

describe("Fab component", () => {
    test("Renders fab component", () => {
        const result = render(<Fab />);
        expect(result).not.toBeUndefined();
    });
});


