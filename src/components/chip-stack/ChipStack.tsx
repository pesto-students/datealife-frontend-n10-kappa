import { ChipProps as MUIChipProps } from "@mui/material/Chip";
import { ReactElement, useEffect, useState } from "react";
import { StyledChip, StyledStack } from "./ChipStack.style";

export interface ChipStackProps {
    chips: ChipItem[];
    maxChips?: number;
    onChipClick?: (items: SelectedChipsType) => void;
    userChips?: SelectedChipsType;
}

type ChipItem = {
    label: string;
    value: string;
};

export type SelectedChipsType = {
    [label: string]: string;
};

interface ChipProps extends MUIChipProps {
    isSelected: boolean;
}

const Chip = (props: ChipProps) => {
    const { isSelected, label, ...restProps } = props;
    if (isSelected) {
        restProps["color"] = "secondary";
        restProps["variant"] = "filled";
    } else {
        restProps["variant"] = "outlined";
    }

    return <StyledChip label={label} clickable {...restProps} />;
};

const ChipStack = (props: ChipStackProps): ReactElement => {
    const { chips, maxChips = 5, onChipClick, userChips } = props;
    const [selectedChips, setSelectedChips] = useState<SelectedChipsType>({});

    useEffect(() => {
        setSelectedChips(userChips || {});
    }, [userChips]);

    const handleClick = (label: string, value: string) => {
        const newSelection: SelectedChipsType = { ...selectedChips };
        if (Object.prototype.hasOwnProperty.call(selectedChips, label)) {
            delete newSelection[label];
        } else if (Object.keys(newSelection).length < maxChips) {
            newSelection[label] = value;
        }
        onChipClick && onChipClick(newSelection);
        setSelectedChips(newSelection);
    };

    return (
        <StyledStack spacing={1} direction="row">
            {chips.map(({ label, value }: ChipItem) => (
                <Chip
                    label={label}
                    key={value}
                    aria-label={label}
                    isSelected={Object.prototype.hasOwnProperty.call(selectedChips, label)}
                    clickable
                    onClick={() => handleClick(label, value)}
                />
            ))}
        </StyledStack>
    );
};

export default ChipStack;
