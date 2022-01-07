import styled from "styled-components";
import { SECONDARY_COLOR } from "../../const";

const ProfileMatchPictureContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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


export {
    ProfileMatchPictureContainer,
    MatchedProfilePicture,
    MatchedProfilePictureOne,
    MatchedProfilePictureTwo,
   };
