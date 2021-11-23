import styled from "styled-components";
import Box from "@mui/material/Box";
import MUICardMedia from "@mui/material/CardMedia";
import { CardMediaProps } from "./CardMedia";
import { CardActionsProps } from "./CardActions";
import { CardInfoProps } from "./CardInfo";
import { BoxProps } from "@mui/system/Box";

const CardContainer = styled(Box)`
     {
        min-width: 200;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 8px;
    }
`;

const CardMediaContainer = styled(Box)`
     {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const CardMediaContent = styled(({ height, width, ...props }: CardMediaProps) => <MUICardMedia {...props} />)<CardMediaProps>`
     {
        min-width: 200px;
        height: ${({ height = 200 }: CardMediaProps) => height}px;
        max-width: ${({ width = 200 }: CardMediaProps) => width}px;
        border-radius: ${({ width = 200 }: CardMediaProps) => width / 15}px;
        object-fit: cover;
        border-radius: 10px;
    }
`;
// width: ${({ width = 200 }: CardMediaProps) => width}px;


const CardActionsContainer = styled(Box)`
     {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 20px 0;
    }
`;

const CardActionsContent = styled(({ width, ...props }: BoxProps) => <Box {...props} />)`
     {
        "& > :not(style)": {
            margin: 8px;
        }
        display: flex;
        justify-content: space-between;
        width: ${({ width = 200 }: CardActionsProps) => width * 0.8}px;
    }
`;

const CardInfoContainer = styled(Box)`
     {
        "& > :not(style)": {
            margin: 8px;
        }
        display: flex;
        width: 100%;
        height: 0;
        justify-content: center;
        align-items: center;
    }
`;

const CardInfoContent = styled(({ width, ...props }: BoxProps) => <Box {...props} />)`
     {
        position: relative;
        left: 20px;
        width: ${({ imgWidth = 200 }: CardInfoProps) => imgWidth}px;
    }
`;

//! should be replace with calc made from width(width - 50)
const CardInfoContentTop = styled(CardInfoContent)`
     {
        bottom: ${({ imgHeight = 200 }: CardInfoProps) => imgHeight - 35}px;
    }
`;

const CardInfoContentBottom = styled(CardInfoContent)`
     {
        bottom: 35px;
        left: ${(props: any) => (props.hasIcon ? 0 : "20px")};
    }
`;

export {
    CardContainer,
    CardActionsContainer,
    CardActionsContent,
    CardMediaContainer,
    CardMediaContent,
    CardInfoContainer,
    CardInfoContentTop,
    CardInfoContentBottom,
};
