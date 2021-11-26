import { SliderProps } from "@mui/material/Slider";
import { ReactElement } from "react";
import { WarningSlider } from "./Slider.styles";

export interface StyledSliderProps extends SliderProps {
}

const Slider = (props: StyledSliderProps): ReactElement => {
    return <WarningSlider {...props} />;
};

export default Slider;
