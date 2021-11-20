import { render } from "@testing-library/react";
import Error from "./Error";

describe("Error component", () => {
    test("Renders error component", () => {
        const result = render(<Error errorHeading="Error" errorsubText="We have an error" />);
        expect(result).not.toBeUndefined();
        // expect(getByText(/Users/i)).toBeInTheDocument();
    });
});
