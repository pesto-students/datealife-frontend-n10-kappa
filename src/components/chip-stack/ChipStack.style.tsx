import styled from "styled-components";
import MUIChip from "@mui/material/Chip";
import { Stack } from "@mui/material";

const StyledChip = styled(MUIChip)`
    && {
        margin: 8px;
    }
`;

const StyledStack = styled(Stack)`
    max-width: 500px;
    margin: auto;
    flex-wrap: wrap;
`;

export { StyledChip, StyledStack };
