import { render, cleanup } from "@testing-library/react";
import Slider, { StyledSliderProps as SliderProps } from "./Slider";

describe("Slider component", () => {
    afterEach(cleanup);
    const component = <Slider {...{} as SliderProps}/>;
    test("Renders Slider component ", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });
});
