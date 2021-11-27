import React from "react";
import styled, { ThemeProps } from "styled-components";
import Theme from "../../theme";

const LogoDiv = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

const LogoImg = styled.img`
    width: 100px;
    height: 100px;
`;

const LogoText = styled.h3`
    font-family: "DancingScript-Regular", cursive;
    color: white;
    font-size: 30px;
    margin-top: 8px;
`;

const PrivacyText = styled.p`
    text-align: center;
    font-size: 13px;
    line-height: 19px;
    color: white;
    padding: 0 20px;
    margin-bottom: 30px;
`;

const FooterText = styled.p`
    text-align: center;
    font-size: 13px;
    line-height: 19px;
    color: white;
    padding: 0 20px;
    position: absolute;
    bottom: 30px;
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

export { LogoDiv, LogoImg, LogoText, PrivacyText, FooterText, StyledBody, OdourlessWrapper };
