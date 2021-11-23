import Box from "@mui/material/Box/Box";
import Fab, { FabProps as MUIFabProps } from "@mui/material/Fab";
import styled from "styled-components";
import { ImageUploaderProps } from "./ImageUploader";

export interface FabProps extends MUIFabProps {
    component: string;
}

const ImageUploaderContainer = styled(Box)`
    max-height: ${({ maxHeight = 500 }: ImageUploaderProps) => maxHeight}px;
    min-height: 50px;
    max-width: ${({ maxWidth = 500 }: ImageUploaderProps) => maxWidth}px;
    width: 100%;
    min-width: 50px;
    margin: 8px auto;
`;

const ImageUploaderContent = styled(Box)`
    height: ${({ height = 500 }: ImageUploaderProps) => height}px;
    max-height: ${({ maxHeight = 500 }: ImageUploaderProps) => maxHeight}px;
    max-width: ${({ maxWidth = 500 }: ImageUploaderProps) => maxWidth}px;
    width: 100%;
`;

const AddButtonContainer = styled(Box)`
    text-align: right;
    height: 0;
`;

const AddButtonContent = styled(Fab)<FabProps>`
    position: relative;
    bottom: 20px;
    left: 20px;
`;

const ImageUplaoderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ width = 200 }: ImageUploaderProps) => width / 15}px;
`;
export { ImageUploaderContainer, ImageUploaderContent, AddButtonContainer, AddButtonContent, ImageUplaoderImage };
