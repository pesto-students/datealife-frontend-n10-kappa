import { ReactElement } from "react";
import { CardInfoContainer, CardInfoContentTop, CardInfoContentBottom } from "./Card.style";

export interface CardInfoProps {
    alignment: "top" | "bottom";
    isIcon?: boolean;
    children?: any;
    imgHeight: number;
    imgWidth: number;
}

const CardInfo = (props: CardInfoProps): ReactElement => {
    const { alignment } = props;
    const isTopAligned = alignment == "top";

    const CardInfoContent = () => {
        if (isTopAligned) return <CardInfoContentTop {...props} />;
        return <CardInfoContentBottom {...props} imgHeight={0} />;
    };

    return <CardInfoContainer>{CardInfoContent}</CardInfoContainer>;
};

export default CardInfo;
