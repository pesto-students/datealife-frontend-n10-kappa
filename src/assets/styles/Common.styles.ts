import React from "react";
import styled, { ThemeProps } from "styled-components";
import Theme from "../../theme";

const StyledBody = styled.div`
    max-width: 500px;
    margin: 56px auto;
    @media (max-width: 599.99px) {
        margin: 56px 20px;
    }
`;

const OdourlessWrapper = styled((props) => React.createElement(props.component, props))`
    color: ${({ theme }: ThemeProps<typeof Theme>) => theme.palette.common.white};
`;

export { StyledBody, OdourlessWrapper };
