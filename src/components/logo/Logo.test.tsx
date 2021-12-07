import { render, cleanup, fireEvent } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo component", () => {
    afterEach(cleanup);

    test("Renders logo ", () => {
        const result = render(<Logo imgUrl="" />);
        expect(result).not.toBeUndefined();
    });
    test("Has an alt  ", () => {
        const {getByTestId} = render(<Logo imgUrl="" />);
        expect(getByTestId("logo-img")).toHaveAttribute("alt");
    });
});
