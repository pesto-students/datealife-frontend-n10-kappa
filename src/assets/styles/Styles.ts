import styled from "styled-components";

const Div = styled.div`
            background: linear-gradient(0deg, #F56E65 0%, #F66699 33.85%, #9B8AF4 100%);
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;`;

const LogoDiv = styled.div `
            width: 150px;
            height: 150px;
            border-radius: 75px;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px`;

const LogoImg = styled.img `
            width: 100px;
            height: 100px;`;

const LogoText = styled.h3 `
            font-family: 'Dancing Script', cursive;
            color: white;
            font-size: 30px;
            margin-top: 8px;`;

const PrivacyText = styled.p`
                        text-align: center;
                        font-size: 13px;
                        line-height: 19px;
                        color: white;
                        padding: 0 20px;
                        margin-bottom: 30px;`;

const FooterText = styled.p`
                    text-align: center;
                    font-size: 13px;
                    line-height: 19px;
                    color: white;
                    padding: 0 20px;
                    position: absolute;
                    bottom: 30px;`;

export {
    Div,
    LogoDiv,
    LogoImg,
    LogoText,
    PrivacyText,
    FooterText
};
