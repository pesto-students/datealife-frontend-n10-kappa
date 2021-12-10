import { render } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";
describe("Error boundary component", () => {
    test("Renders error boundary component", () => {
        const result = render(<ErrorBoundary>Hi</ErrorBoundary>);
        expect(result).not.toBeUndefined();
    });
});
