import Slider, {SliderProps} from "@mui/material/Slider";
import { styled, alpha } from "@mui/material/styles";

export const WarningSlider = styled(Slider)<SliderProps>(({ theme }) => ({
    color: theme.palette.warning.main,
    "& .MuiSlider-thumb": {
      "&:hover, &.Mui-focusVisible": {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.warning.main, 0.16)}`,
      },
      "&.Mui-active": {
        boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.warning.main, 0.16)}`,
      },
    },
}));
