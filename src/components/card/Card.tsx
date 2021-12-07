import * as React from "react";
import { BoxProps } from "@mui/material/Box";
import { CardContainer } from "./Card.style";
import { ReactElement } from "react";

const Card = (props: BoxProps<"div", unknown>): ReactElement => <CardContainer {...props} data-testid="card-container">{props.children}</CardContainer>;

export default Card;
