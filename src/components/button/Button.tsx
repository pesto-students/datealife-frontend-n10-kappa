import { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { ReactElement } from "react";
import { StyledButton } from "./Button.style";

export interface ButtonProps extends MUIButtonProps {
    curved?: boolean;
}

const Button = (props: ButtonProps): ReactElement => <StyledButton {...props} />;

export default Button;
