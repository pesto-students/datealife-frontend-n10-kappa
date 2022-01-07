import { CardActionsProps as MuiCardActionsProps } from "@mui/material/CardActions";
import { ReactElement } from "react";
import { CardActionsContainer, CardActionsContent } from "./Card.style";

export interface CardActionsProps extends MuiCardActionsProps {
    width: number;
}

const CardActions = (props: CardActionsProps): ReactElement => (
    <CardActionsContainer>
        <CardActionsContent {...props} />
    </CardActionsContainer>
);

export default CardActions;
