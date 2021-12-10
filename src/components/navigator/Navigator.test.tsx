import { render, cleanup } from "@testing-library/react";
import Navigator, { NavigatorProps } from "./Navigator";

describe("Navigator component", () => {
    afterEach(cleanup);
    const component = <Navigator {...{} as NavigatorProps}/>;
    test("Renders navigator component ", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });
});
