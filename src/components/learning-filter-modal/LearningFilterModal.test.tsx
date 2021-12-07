import { render, cleanup, fireEvent } from "@testing-library/react";
import LearningFilterModal, {LearningFilterModalProps} from "./LearningFilterModal";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

describe("Learning filter modal component", () => {
    afterEach(cleanup);
    const learningProps = {filterOpen: true} as LearningFilterModalProps;
    const component =   <ThemeProvider theme={theme}><LearningFilterModal {...learningProps}/></ThemeProvider>;

    test("Renders learning filter modal component", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });

    test("Has cross button", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("cross-button")).not.toBeUndefined();
    });

    test("Has apply button", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("apply-button")).not.toBeUndefined();
    });

    test("Has Filter text", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("filter-text")).not.toBeUndefined();
    });


    test("Has Button group", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("button-group")).not.toBeUndefined();
    });

    test("Cross button calls toggle function", () => {
        const mockFunction = jest.fn();
        learningProps.toggleFilter = mockFunction;
        const {getByTestId} = render(<ThemeProvider theme={theme}><LearningFilterModal {...learningProps}/></ThemeProvider>);
        fireEvent.click(getByTestId("cross-button"));
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    test("Apply button calls apply function", () => {
        const mockFunction = jest.fn();
        learningProps.applyFilter = mockFunction;
        const {getByTestId} = render(<ThemeProvider theme={theme}><LearningFilterModal {...learningProps}/></ThemeProvider>);
        fireEvent.click(getByTestId("apply-button"));
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});
