import {StyledBox} from "./Bar.styles";

const  Bar = (props: BarProps = DefaultProps): JSX.Element => {
    return (
      <StyledBox width={props.width} color={props.color} data-testid="bar">
      </StyledBox>
    );
};

interface BarProps {
    width?: string;
    color?: string;
}

const DefaultProps: BarProps = {
    width: "200px",
    color: "white"
};

export default Bar;
