import { render, cleanup } from "@testing-library/react";
import ToggleButtonGroup, { ToggleButtonGroupProps } from "./ToggleButtonGroup";

describe("Toggle button group component", () => {
    afterEach(cleanup);
    const component = <ToggleButtonGroup {...{} as ToggleButtonGroupProps}/>;
    test("Renders Toggle button group component ", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });
});
