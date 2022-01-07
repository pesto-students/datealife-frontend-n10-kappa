import { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { ReactElement } from "react";
import { StyledButton } from "./Button.style";

export interface ButtonProps extends MUIButtonProps {
    curved?: boolean;
    whiteText?: boolean;
    whiteBackground?: boolean;
}

const Button = (props: ButtonProps): ReactElement => <StyledButton {...props} data-testid="button" />;

export default Button;
