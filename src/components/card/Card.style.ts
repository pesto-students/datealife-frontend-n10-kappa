import styled from "styled-components";
import Box from "@mui/material/Box";
import MUICardMedia from "@mui/material/CardMedia";
import { CardMediaProps } from "./CardMedia";
import { CardActionsProps } from "./CardActions";
import { CardInfoProps } from "./CardInfo";

interface CommonProps {
    width: number;
    height: number;
    imgWidth: number;
    imgHeight: number;
}

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

const CardMediaContent = styled(MUICardMedia)<CardMediaProps>`
     {
        min-width: 200px;
        max-width: ${({ height = 200 }: CardMediaProps) => height}px;
        width: ${({ width = 200 }: CardMediaProps) => width}px;
        object-fit: cover;
    }
`;

const CardActionsContainer = styled(Box)`
     {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 8px 0;
    }
`;

const CardActionsContent = styled(Box)`
     {
        "& > :not(style)": {
            margin: 8px;
        }
        display: flex;
        justify-content: space-around;
        width: ${({ width = 200 }: CardActionsProps) => width}px;
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

const CardInfoContent = styled(Box)`
     {
        position: relative;
        left: 20px;
        width: ${({ imgWidth = 200 }: CardInfoProps) => imgWidth}px;
    }
`;

//! should be replace with calc made from width(width - 50)
const CardInfoContentTop = styled(CardInfoContent)`
     {
        bottom: ${({ imgHeight = 200 }: CardInfoProps) => imgHeight - 50}px;
    }
`;

const CardInfoContentBottom = styled(CardInfoContent)`
     {
        bottom: 50px;
        left: ${(props: any) => (props.isIcon ? 0 : "20px")};
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
