import React from "react";
import styled, { ThemeProps } from "styled-components";
import Theme from "../../theme";

const CrossButton = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
`;

const WhiteBar = styled.div`
    width: 80%;
    color: white;
    height: 1px;
    background: white;
    margin: 30px auto 10px;
    border-radius: 15px;
`;

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

export { StyledBody, OdourlessWrapper, CrossButton, WhiteBar };
