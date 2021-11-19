import styled from "styled-components";
import MUIToggleButton from "@mui/material/ToggleButton";
import MUIToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ToggleButtonGroupProps } from "./ToggleButtonGroup";
import { ThemeProps } from "styled-components";
import Theme from "../../theme";

const StyledToggleButton = styled(({ addSpacing, curved, ...props }) => <MUIToggleButton {...props} />)`
    && {
        padding: 16px;
        border-radius: ${({ curved }: ToggleButtonGroupProps) => (curved ? 12 : 0)}px;
    }
    &&.Mui-selected {
        color: ${({ theme }: ThemeProps<typeof Theme>) => theme.palette.secondary.contrastText};
        background-color: ${({ theme }: ThemeProps<typeof Theme>) => theme.palette.secondary.main};
    }

    &&.Mui-selected:hover {
        background-color: ${({ theme }: ThemeProps<typeof Theme>) => theme.palette.secondary.dark};
    }
`;

const StyledToggleButtonGroup = styled(({ addSpacing, curved, ...props }) => <MUIToggleButtonGroup {...props} />)`
    && {
        margin: ${({ addSpacing }: any) => (addSpacing ? 8 : 0)}px;
        border-radius: ${({ curved }: ToggleButtonGroupProps) => (curved ? 12 : 0)}px;
    }
`;

export { StyledToggleButton, StyledToggleButtonGroup };
