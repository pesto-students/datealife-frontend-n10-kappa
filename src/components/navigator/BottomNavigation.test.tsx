import { render, cleanup } from "@testing-library/react";
import BottomNavigation, { BottomNavigationProps } from "./BottomNavigation";

describe("Bottom navigation component", () => {
    afterEach(cleanup);
    const component = <BottomNavigation {...{} as BottomNavigationProps}/>;
    test("Renders Bottom navigation ", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });
});
