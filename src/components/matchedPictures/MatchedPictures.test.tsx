import { render, cleanup } from "@testing-library/react";
import MatchedPictures from "./MatchedPictures";

describe("Matched pictures component", () => {
    afterEach(cleanup);
    const component = <MatchedPictures imgUrl1="" imgUrl2="" />;
    test("Renders matched pictures ", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });
    test("Renders picture 1 ", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("img1")).toHaveAttribute("alt");
        expect(getByTestId("img1")).toHaveAttribute("src");
    });
    test("Renders picture 2 ", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("img2")).toHaveAttribute("alt");
        expect(getByTestId("img2")).toHaveAttribute("src");

    });
});
