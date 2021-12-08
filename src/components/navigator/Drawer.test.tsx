import { render, cleanup } from "@testing-library/react";
import Drawer, { DrawerProps } from "./Drawer";

describe("Drawer component", () => {
    afterEach(cleanup);
    const component = <Drawer {...{} as DrawerProps}/>;
    test("Renders drawer component ", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });
});
