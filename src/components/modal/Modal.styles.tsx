import Dialog, {DialogProps} from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

export const StyledDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
    "&&": {
        borderBottomLeftRadius: "15px!important",
        borderBottomRightRadius: "15px!important"
    },
}));
