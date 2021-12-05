import {StyledBox} from "./Bar.styles";

const  Bar = (props: BarProps): JSX.Element => {
    return (
      <StyledBox width={props.width} color={props.color}>
      </StyledBox>
    );
};

interface BarProps {
    width?: string;
    color?: string;
}

export default Bar;
