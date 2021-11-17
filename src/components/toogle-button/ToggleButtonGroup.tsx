import { ToggleButtonGroupProps as MUIToggleButtonGroupProps } from "@mui/material/ToggleButtonGroup";
import { ReactElement, useState } from "react";
import { StyledToggleButtonGroup } from "./ToggleButtonGroup.style";

export interface ToggleButtonGroupProps extends MUIToggleButtonGroupProps {
    curved?: boolean;
    addSpacing?: boolean;
    onButtonChange?: (string: string) => void;
}

const ToggleButtonGroup = ({ onButtonChange, defaultValue, ...props }: ToggleButtonGroupProps): ReactElement => {
    const [selected, setSelected] = useState(defaultValue);
    const handleChange = (e: any, latestSelection: any) => {
        setSelected(latestSelection);
        onButtonChange && onButtonChange(latestSelection);
    };

    return <StyledToggleButtonGroup onChange={handleChange} value={selected} {...props} />;
};

export default ToggleButtonGroup;
