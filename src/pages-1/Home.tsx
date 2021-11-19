import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import { StyledFab } from "../assets/styles/Fab.styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ChatIcon from "@mui/icons-material/Chat";
import Header from "components/header/Header";
import { getUsersSelector, getErrorSelector, getLoadingSelector } from "../store/user/selectors";
import { fetchUserRequest } from "../store/user/actions";
import { Card, CardMedia, CardInfo, CardActions } from "components/card";

const Home = (): JSX.Element => {
    const dispatch = useDispatch();
    const users = useSelector(getUsersSelector);
    const error = useSelector(getErrorSelector);
    const loading = useSelector(getLoadingSelector);

    useEffect(() => {
        dispatch(fetchUserRequest());
    }, [dispatch]);

    return (
        <div style={{ padding: "25px" }}>
            <Header
                text={"Matches"}
                backFunction={() => {
                    alert("Moving back");
                }}
            />
            <h1>Users1</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error</div>
            ) : (
                users.map((user, index) => (
                    <div style={{ marginBottom: "10px" }} key={user.id}>
                        {++index}. {user.name}
                    </div>
                ))
            )}
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
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "pink",
                        }}
                    >
                        Full Name
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: "pink",
                        }}
                    >
                        Profession
                    </Typography>
                </CardInfo>
                <CardActions width={500}>
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
                <CardInfo alignment="top" imgHeight={200} imgWidth={200}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "pink",
                        }}
                    >
                        Full Name
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: "pink",
                        }}
                    >
                        Profession
                    </Typography>
                </CardInfo>

                <CardInfo alignment="bottom" imgHeight={200} imgWidth={200} isIcon>
                    <CardActions width={200}>
                        <Fab color="primary" aria-label="cancel" size="small">
                            <ConnectWithoutContactIcon />
                        </Fab>
                        <Fab color="secondary" aria-label="like" size="small">
                            <ChatIcon />
                        </Fab>
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
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "pink",
                        }}
                    >
                        Full Name
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: "pink",
                        }}
                    >
                        Profession
                    </Typography>
                </CardInfo>
            </Card>
        </div>
    );
};

export default Home;
