import Typography from "@mui/material/Typography";
import { StyledFab } from "../assets/styles/Fab.styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardMedia, CardInfo, CardActions } from "../components/card";
import { OdourlessWrapper, StyledBody } from "../assets/styles/Common.styles";
import Layout from "../components/layout/Layout";

const Home = (): JSX.Element => {
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Matches",
                backFunction: () => {}
            }}
        >
            <StyledBody>
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
                        <StyledFab success={false} aria-label="disliked">
                            <CloseRoundedIcon fontSize="large" />
                        </StyledFab>
                        <StyledFab success={true} aria-label="like">
                            <FavoriteIcon fontSize="large" />
                        </StyledFab>
                    </CardActions>
                </Card>
            </StyledBody>
        </Layout>
    );
};

export default Home;
