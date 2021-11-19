import styled from "styled-components";

const Div = styled.div`
    background: linear-gradient(0deg, #f56e65 0%, #f66699 33.85%, #9b8af4 100%);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ContainerDiv = styled.div`
                        padding: 60px 45px;
                        display: flex;
                        flex-direction: column;
                    `;

const TextFieldDiv = styled.div`
                        margin: 64px 0 93px;
                        width: 100%;
                    `;

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
    font-family: "Dancing Script", cursive;
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
    padding: 30px;
    max-width: 500px;
    margin: 65px auto 0;
`;

export { Div, LogoDiv, LogoImg, LogoText, PrivacyText, FooterText, StyledBody, ContainerDiv, TextFieldDiv };
