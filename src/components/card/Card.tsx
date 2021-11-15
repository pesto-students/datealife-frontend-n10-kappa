import * as React from "react";
import { BoxProps } from "@mui/material/Box";
import { CardContainer } from "./Card.style";

const Card = (props: BoxProps<"div", unknown>) => <CardContainer {...props}>{props.children}</CardContainer>;

export default Card;
