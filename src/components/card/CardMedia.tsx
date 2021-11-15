import { CardMediaProps as MUICardMediaProps } from "@mui/material/CardMedia";
import { CardMediaContainer, CardMediaContent } from "./Card.style";

export interface CardMediaProps extends MUICardMediaProps<"img", unknown> {
    component?: "img";
    width: number;
    height: number;
}

const CardMedia = (props: CardMediaProps) => (
    <CardMediaContainer>
        <CardMediaContent {...props} component="img" />
    </CardMediaContainer>
);

export default CardMedia;
