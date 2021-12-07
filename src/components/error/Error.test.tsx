import { render } from "@testing-library/react";
import Error from "./Error";

describe("Error component", () => {
    test("Renders error component", () => {
        const result = render(<Error errorHeading="Error" errorsubText="We have an error" />);
        expect(result).not.toBeUndefined();
    });
    test("Renders error title", () => {
        const { getByTestId } = render(<Error errorHeading="Error" errorsubText="We have an error" />);
        expect(getByTestId("error-heading")).toHaveTextContent("Error");

    });
    test("Renders error description", () => {
        const { getByTestId } = render(<Error errorHeading="Error" errorsubText="We have an error" />);
        expect(getByTestId("error-description")).toHaveTextContent("We have an error");
    });
});
