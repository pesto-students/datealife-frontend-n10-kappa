import { ReactElement } from "react";
import { StyledFab, StyledFabProps } from "./Fab.styles";

export interface StyledFabCompProps extends StyledFabProps {
}

const Fab = (props: StyledFabCompProps): ReactElement => {
    return <StyledFab {...props} />;
};

export default Fab;
