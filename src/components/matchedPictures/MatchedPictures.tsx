import { ReactElement } from "react";
import { ProfileMatchPictureContainer, MatchedProfilePictureOne, MatchedProfilePictureTwo } from "./MatchedPictures.styles";

const MatchedPitctures = (props: MatchedPitcturesProps): ReactElement => {
    return (
        <ProfileMatchPictureContainer style={props.styles}>
            <MatchedProfilePictureOne src={props.imgUrl1} alt="profile picture" data-testid="img1" />
            <MatchedProfilePictureTwo src={props.imgUrl2} alt="profile picture 2" data-testid="img2" />
        </ProfileMatchPictureContainer>
    );
};

export default MatchedPitctures;

interface MatchedPitcturesProps {
    imgUrl1: string;
    imgUrl2: string;
    styles?: any;
}
