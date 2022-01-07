import { batch, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { v1 as uuidv1 } from "uuid";

import { Fab, Typography, Grid, Box, Container, ImageList, ImageListItem, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { Layout, Button, ImageUploader } from "../components";
import { PhotoDiv } from "../assets/styles/Common.styles";
import { getLoggedInUser, logout } from "../store/reducers/user";
import { deleteUser, onSignOut } from "../auth";
import { deleteUserRequest } from "../store/sagas/user/actions";
import { resetLearning } from "../store/reducers/learnings";
import { resetMatchMaking } from "../store/reducers/matchMaking";

const EditProfile = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const BoxStyles = {
        backgroundColor: "secondary.main",
        padding: "30px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
    };

    const handleClick = (type: string) => {
        navigate(`/user/profile/editProfile/${type}`);
    };

    const handleLogout = async () => {
        const logoutString: string = await onSignOut();
        logoutString &&
            batch(() => {
                dispatch(resetLearning());
                dispatch(resetMatchMaking());
                dispatch(logout());
            });
    };

    const handleDeleteAccount = async () => {
        const logoutString: string = await onSignOut();

        logoutString && dispatch(deleteUserRequest({ userId: user.uid as string }));
    };

    const getImageItems = (pictures: string[] = []) => {
        return [0, 1, 2, 3, 4, 5].map((index) => {
            const ImageUploaderProps: any = {
                maxHeight: 164,
                maxWidth: 164,
                height: 164,
                width: 164,
            };
            if (pictures[index]) {
                ImageUploaderProps["src"] = `${pictures[index]}?w=164&h=164&fit=crop&auto=format`;
            }
            return (
                <ImageListItem key={uuidv1()}>
                    <ImageUploader {...ImageUploaderProps} alt={`profile img ${index}`} />
                </ImageListItem>
            );
        });
    };

    return (
        <>
            <Layout
                hasDrawer
                headerProps={{
                    text: "Edit About",
                    color: "secondary",
                }}
            >
                <Container sx={{ margin: "55px auto" }} maxWidth={false} disableGutters>
                    <Box sx={BoxStyles}>
                        <PhotoDiv style={{ backgroundImage: `url(${user.profilePicture})` }}>
                            <Fab
                                color="default"
                                aria-label="add"
                                sx={{ position: "relative", top: "100px", left: "100px" }}
                                onClick={() => handleClick("editPicture")}
                            >
                                <EditIcon />
                            </Fab>
                        </PhotoDiv>

                        <Typography variant="subtitle1" align="center" color="white">
                            {user.fullName}
                        </Typography>
                        <Typography variant="body2" align="center" color="white">
                            {user.profession && `${user.profession} ,`}
                            {user.age}
                        </Typography>
                    </Box>

                    <Container maxWidth={"sm"}>
                        <Grid container alignItems="center" justifyContent="space-between" mt={5} mb={5}>
                            <Grid item xs={10}>
                                <Typography variant="h6" color="secondary">
                                    GALLERY
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Fab
                                    color="secondary"
                                    aria-label="edit"
                                    sx={{ float: "right" }}
                                    onClick={() => handleClick("editPictures")}
                                >
                                    <EditIcon color="info" />
                                </Fab>
                            </Grid>
                        </Grid>
                        {<ImageList cols={3}>{getImageItems(user.pictures)}</ImageList>}
                        <Stack spacing={3} mt={5} mb={5}>
                            <Box mb={2}>
                                <Grid container alignItems="center" justifyContent="space-between">
                                    <Grid item xs={10}>
                                        <Typography variant="h6" color="secondary">
                                            ABOUT ME
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Fab
                                            color="secondary"
                                            aria-label="edit"
                                            sx={{ float: "right" }}
                                            onClick={() => handleClick("editAbout")}
                                        >
                                            <EditIcon color="info" />
                                        </Fab>
                                    </Grid>
                                </Grid>

                                <Stack spacing={3} mt={2}>
                                    <Box>
                                        <Typography variant="h6">Bio</Typography>
                                        <Typography variant="body2">{user.bioData}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">Job Title</Typography>
                                        <Typography variant="body2">{user.profession}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">Company Name</Typography>
                                        <Typography variant="body2">{user.companyName}</Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            <Box mb={6}>
                                <Grid container alignItems="center" justifyContent="space-between" mb={2}>
                                    <Grid item xs={10}>
                                        <Typography variant="h6" color="secondary">
                                            INTERESTS
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Fab
                                            color="secondary"
                                            aria-label="edit"
                                            sx={{ float: "right" }}
                                            onClick={() => handleClick("editInterests")}
                                        >
                                            <EditIcon color="info" />
                                        </Fab>
                                    </Grid>
                                </Grid>
                                <Typography variant="body2">{user.interests?.join(", ")}.</Typography>
                            </Box>

                            <Box mb={4}>
                                <Grid container alignItems="center" justifyContent="space-between" mb={2}>
                                    <Grid item xs={10}>
                                        <Typography variant="h6" color="secondary">
                                            IDENTIFY AS
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Fab
                                            color="secondary"
                                            aria-label="edit"
                                            sx={{ float: "right" }}
                                            onClick={() => handleClick("editIdentify")}
                                        >
                                            <EditIcon color="info" />
                                        </Fab>
                                    </Grid>
                                </Grid>
                                <Typography variant="body2">
                                    {user.gender}, {user.orientation}
                                </Typography>
                            </Box>

                            <Button variant="contained" color="primary" size="large" whiteText onClick={handleLogout}>
                                Logout
                            </Button>
                            <Button variant="contained" color="error" whiteText onClick={handleDeleteAccount}>
                                Delete account
                            </Button>
                        </Stack>
                    </Container>
                </Container>
            </Layout>
        </>
    );
};

export default EditProfile;
