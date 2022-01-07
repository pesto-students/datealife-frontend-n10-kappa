import { render, cleanup } from "@testing-library/react";
import ToggleButton, { ToggleButtonProps } from "./ToggleButton";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

describe("Toggle button component", () => {
    afterEach(cleanup);
    const component = <ThemeProvider theme={theme}><ToggleButton {...{value: "gender"} as ToggleButtonProps}/></ThemeProvider>;
    test("Renders Toggle button component ", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });
});
