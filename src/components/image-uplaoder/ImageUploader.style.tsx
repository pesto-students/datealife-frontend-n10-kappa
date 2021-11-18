import Box from "@mui/material/Box/Box";
import Fab, { FabProps } from "@mui/material/Fab";
import styled from "styled-components";
import { ImageUploaderProps } from "./ImageUploader";

export interface AddButtonContentProps extends FabProps {
    component: string;
}

const ImageUploaderContainer = styled(Box)`
    height: ${({ height = 200 }: ImageUploaderProps) => height}px;
    width: ${({ width = 150 }: ImageUploaderProps) => width}px;
    margin: 8px auto;
`;

const ImageUploaderContent = styled(Box)`
    height: ${({ height = 200 }: ImageUploaderProps) => height}px;
    width: ${({ width = 150 }: ImageUploaderProps) => width}px;
    background-color: #959595;
`;

const AddButtonContainer = styled(Box)`
    text-align: right;
    height: 0;
`;

const AddButtonContent = styled(Fab)<AddButtonContentProps>`
    position: relative;
    bottom: 20px;
    left: 20px;
`;

const ImageUplaoderImage = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
`;
export { ImageUploaderContainer, ImageUploaderContent, AddButtonContainer, AddButtonContent, ImageUplaoderImage };
