import { CardMediaProps as MUICardMediaProps } from "@mui/material/CardMedia";
import { ReactElement } from "react";
import { CardMediaContainer, CardMediaContent } from "./Card.style";

export interface CardMediaProps extends MUICardMediaProps<"img", unknown> {
    component?: "img";
    width: number;
    height: number;
}

const CardMedia = (props: CardMediaProps): ReactElement => (
    <CardMediaContainer>
        <CardMediaContent {...props} component="img" />
    </CardMediaContainer>
);

export default CardMedia;
