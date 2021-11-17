import { ToggleButtonProps as MUIToggleButtonProps } from "@mui/material/ToggleButton";
import { ReactElement } from "react";
import { StyledToggleButton } from "./ToggleButtonGroup.style";

export interface ToggleButtonProps extends MUIToggleButtonProps {
    curved?: boolean;
    addSpacing?: boolean;
}

const ToggleButton = (props: ToggleButtonProps): ReactElement => {
    return <StyledToggleButton {...props} />;
};

export default ToggleButton;
