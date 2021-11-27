import { ReactElement } from "react";
import { LogoDiv, LogoImg } from "./Logo.styles";

const Logo = (props: Logo): ReactElement => {
    return (
        <LogoDiv style={props.styles}>
            <LogoImg src={props.imgUrl} alt="logo" />
        </LogoDiv>
    );
};

export default Logo;

interface Logo {
    imgUrl: string;
    styles: any;
}
