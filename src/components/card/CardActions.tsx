import { CardActionsProps as MuiCardActionsProps } from "@mui/material/CardActions";
import { CardActionsContainer, CardActionsContent } from "./Card.style";

export interface CardActionsProps extends MuiCardActionsProps {
    width: number;
}

const CardActions = (props: CardActionsProps) => (
    <CardActionsContainer>
        <CardActionsContent {...props} />
    </CardActionsContainer>
);

export default CardActions;
