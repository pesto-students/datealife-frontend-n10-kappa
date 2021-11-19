import styled from "styled-components";
import MUIButton from "@mui/material/Button";
import MUIButtonGroup from "@mui/material/ButtonGroup";
import { ButtonProps } from "./Button";
import { ButtonGroupProps } from "./ButtonGroup";

const StyledButton = styled(({ curved, ...props }) => <MUIButton {...props} />)`
    && {
        border-radius: ${({ curved }: ButtonProps) => (curved ? 12 : 0)}px;
        color: white;
    }
`;

const StyledButtonGroup = styled(({ addSpacing, ...props }) => <MUIButtonGroup {...props} />)`
    && > button {
        margin: ${({ addSpacing }: ButtonGroupProps) => (addSpacing ? 8 : 0)}px;
    }
`;

export { StyledButton, StyledButtonGroup };
