import styled from "styled-components";
import { SECONDARY_COLOR } from "../../const";
import {ButtonTextColorWhite} from "./Button.styles";
import Typography from "@mui/material/Typography";

const SendAMessageButton = styled(ButtonTextColorWhite)({
    margin: "25px auto 15px",
    width: "250px",
});

const StyledHeadText = styled(Typography)({
    color: "white",
    fontFamily: "DancingScript-Regular",
    fontSize: "45px",
    marginTop: "80px"
});


const StyledBodyText = styled(Typography)({
    color: "white",
    marginTop: "12px",
});

const StyledSubTitleText = styled(Typography)({
    color: "white",
    fontStyle: "italic",
});

const ProfileMatchPictureContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 40px auto 30px;
`;

const MatchedProfilePicture = styled.img`
    border-radius: 50px;
    height: 100px;
    width: 100px;
`;

const MatchedProfilePictureOne = styled(MatchedProfilePicture)({
    position: "relative",
    left: "20px",
});

const MatchedProfilePictureTwo = styled(MatchedProfilePicture)({
    position: "relative",
    left: "-20px",
    border: `3px solid ${SECONDARY_COLOR}`
});

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

export { SendAMessageButton,
         StyledHeadText,
         StyledBodyText,
         StyledSubTitleText,
         ProfileMatchPictureContainer,
         MatchedProfilePicture,
         MatchedProfilePictureOne,
         MatchedProfilePictureTwo,
         CrossButton,
         WhiteBar};

