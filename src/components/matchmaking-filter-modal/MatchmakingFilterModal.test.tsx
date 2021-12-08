import { render, cleanup, fireEvent } from "@testing-library/react";
import MatchmakingFilterModal, {MatchmakingFilterModalProps} from "./MatchmakingFilterModal";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

describe("Matchmaking filter modal component", () => {
    afterEach(cleanup);
    const matchmakingProps = {filterOpen: true} as MatchmakingFilterModalProps;
    matchmakingProps.sliderValue = [0, 20];
    const component =   <ThemeProvider theme={theme}><MatchmakingFilterModal {...matchmakingProps}/></ThemeProvider>;

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


    test("Has gender button group", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("gender-group")).not.toBeUndefined();
    });


    test("Has age slider", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("age-slider")).not.toBeUndefined();
    });


    test("Has orientation dropdown", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("orientation-toggle")).not.toBeUndefined();
    });


    test("Cross button calls toggle function", () => {
        const mockFunction = jest.fn();
        matchmakingProps.toggleFilter = mockFunction;
        const {getByTestId} = render(<ThemeProvider theme={theme}><MatchmakingFilterModal {...matchmakingProps}/></ThemeProvider>);
        fireEvent.click(getByTestId("cross-button"));
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    test("Apply button calls apply function", () => {
        const mockFunction = jest.fn();
        matchmakingProps.applyFilter = mockFunction;
        const {getByTestId} = render(<ThemeProvider theme={theme}><MatchmakingFilterModal {...matchmakingProps}/></ThemeProvider>);
        fireEvent.click(getByTestId("apply-button"));
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});
