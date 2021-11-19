import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import { StyledFab } from "../assets/styles/Fab.styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ChatIcon from "@mui/icons-material/Chat";
import Header from "../components/header/Header";
import { Card, CardMedia, CardInfo, CardActions } from "../components/card";
import { OdourlessWrapper } from "../assets/styles/Common.styles";

const Home = (): JSX.Element => {
    return (
        <div style={{ padding: "25px" }}>
            <Header
                text={"Matches"}
                backFunction={() => {
                    alert("Moving back");
                }}
            />
            <Card>
                <CardMedia
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Paella dish"
                    onError={(event: any) => {
                        if (event.target)
                            event.target.src =
                                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                    }}
                    width={500}
                    height={500}
                />
                <CardInfo alignment="bottom" imgHeight={0} imgWidth={500}>
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        Full Name
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        Profession
                    </OdourlessWrapper>
                </CardInfo>
                <CardActions width={500}>
                    <Fab color="primary" aria-label="cancel">
                        <OdourlessWrapper component={CancelIcon} fontSize="large" />
                    </Fab>
                    <Fab color="secondary" aria-label="like">
                        <OdourlessWrapper component={FavoriteIcon} fontSize="large" />
                    </Fab>
                    <StyledFab success={false} aria-label="disliked">
                        <CloseRoundedIcon />
                    </StyledFab>
                    <StyledFab success={true} aria-label="like">
                        <FavoriteIcon />
                    </StyledFab>
                </CardActions>
            </Card>
            <Card>
                <CardMedia
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"
                    alt="Paella dish"
                    onError={(event: any) => {
                        if (event.target)
                            event.target.src =
                                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                    }}
                    width={200}
                    height={200}
                />
                <CardInfo alignment="top" imgHeight={200} imgWidth={200}>
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        Full Name
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        Profession
                    </OdourlessWrapper>
                </CardInfo>

                <CardInfo alignment="bottom" imgHeight={200} imgWidth={200} hasIcon>
                    <CardActions width={200}>
                        <OdourlessWrapper component={ConnectWithoutContactIcon} fontSize="large" />
                        <OdourlessWrapper component={ForumRoundedIcon} fontSize="large" />
                    </CardActions>
                </CardInfo>
            </Card>
            <Card>
                <CardMedia
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Paella dish"
                    onError={(event: any) => {
                        if (event.target)
                            event.target.src =
                                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                    }}
                    width={200}
                    height={200}
                />
                <CardInfo alignment="bottom" imgHeight={500} imgWidth={200}>
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        Full Name
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        Profession
                    </OdourlessWrapper>
                </CardInfo>
            </Card>
        </div>
    );
};

export default Home;
