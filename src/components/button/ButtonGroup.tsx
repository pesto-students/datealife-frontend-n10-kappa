import { ButtonGroupProps as MUIButtonGroupProps } from "@mui/material/ButtonGroup";
import { ReactElement } from "react";
import { StyledButtonGroup } from "./Button.style";

export interface ButtonGroupProps extends MUIButtonGroupProps {
    addSpacing?: boolean;
}

const ButtonGroup = (props: ButtonGroupProps): ReactElement => <StyledButtonGroup {...props} />;

export default ButtonGroup;
