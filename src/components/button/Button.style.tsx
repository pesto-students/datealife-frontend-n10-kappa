import styled from "styled-components";
import MUIButton from "@mui/material/Button";
import MUIButtonGroup from "@mui/material/ButtonGroup";
import { ButtonProps } from "./Button";
import { ButtonGroupProps } from "./ButtonGroup";

const StyledButton = styled(({ curved, whiteText, whiteBackground, ...props }) => <MUIButton {...props} />)`
    && {
        border-radius: ${({ curved }: ButtonProps) => (curved ? 12 : 0)}px;
        color: ${({ whiteText }: ButtonProps) => (whiteText ? "white" : "initial")};
        background-color: ${({ whiteBackground }: ButtonProps) => (whiteBackground ? "white" : "none")};
    }
`;

const StyledButtonGroup = styled(({ addSpacing, ...props }) => <MUIButtonGroup {...props} />)`
    && {
        box-shadow: none;
    }
    && > button {
        margin: ${({ addSpacing }: ButtonGroupProps) => (addSpacing ? 8 : 0)}px;
    }
`;

export { StyledButton, StyledButtonGroup };
