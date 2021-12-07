import { ReactElement } from "react";
import { LogoDiv, LogoImg } from "./Logo.styles";

const Logo = (props: LogoProps): ReactElement => {
    return (
        <LogoDiv style={props.styles}>
            <LogoImg src={props.imgUrl} alt="logo" data-testid="logo-img" />
        </LogoDiv>
    );
};

export default Logo;

interface LogoProps {
    imgUrl: string;
    styles?: any;
}
