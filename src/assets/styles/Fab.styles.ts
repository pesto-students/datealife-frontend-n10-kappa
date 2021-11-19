

import Fab, {FabProps} from "@mui/material/Fab";
import { styled, alpha } from "@mui/material/styles";

//   const FabDisLiked = styled(Fab)<FabProps>(({ theme }) => ({
//     backgroundColor: theme.palette.error.main,
//     color: theme.palette.grey[100]
//   }));

interface StyledFabProps extends FabProps {
  success?: boolean;
}

const StyledFab = styled(Fab, {
  shouldForwardProp: (prop) => prop !== "success",
})<StyledFabProps>(({ success, theme }) => ({
    ...(success &&
    {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.grey[100],
        "& .MuiSlider-thumb": {
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
            },
            "&.Mui-active": {
              boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
            },
        }
    }),
    ...(!success &&
        {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.grey[100],
            "& .MuiSlider-thumb": {
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.error.main, 0.16)}`,
                },
                "&.Mui-active": {
                  boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.error.main, 0.16)}`,
                },
            }
        }),
}));


export { StyledFab };
