import { render, fireEvent, cleanup } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
    afterEach(cleanup);

    test("Renders header component", () => {
        const result = render(<Header text="Header" backFunction={jest.fn()} />);
        expect(result).not.toBeUndefined();
    });

    test("Displays back button", () => {
        const { getByTestId } = render(<Header text="Header" backFunction={jest.fn()} />);
        expect(getByTestId("header-back-button")).not.toBeUndefined();
    });

    test("Displays header text", () => {
        const { getByTestId } = render(<Header text="Header" backFunction={jest.fn()} />);
        expect(getByTestId("header-text")).toHaveTextContent("Header");
    });

    test("Back button is clickable ", () => {
        const backFunction = jest.fn();
        const { getByTestId } = render(<Header text="Header" backFunction={backFunction} />);
        fireEvent.click(getByTestId("header-back-button"));
        expect(backFunction).toHaveBeenCalledTimes(1);
    });
});
