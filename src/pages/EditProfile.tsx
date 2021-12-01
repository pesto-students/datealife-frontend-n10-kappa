import Header from "../components/header/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Img from "../assets/images/ben-parker.jpg";
import { Fab, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "../components/button/index";
import Grid from "@mui/material/Grid";
import { Layout } from "../components";
import { PhotoDiv } from "../assets/styles/Common.styles";

const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    }
];

const EditProfile = (): JSX.Element => {
    const BoxStyles = {
                      backgroundColor: "secondary.main",
                      padding: "30px",
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                    };
    return (
        <>
            <Layout
                hasDrawer
                headerProps={{
                    text: "Edit about",
                    color: "secondary",
                    backFunction: () => {}
                }}
            >
                 <Header
                text="Edit profile"
                backFunction={() => {
                    alert("Moving back");
                }}
                color="secondary"
            />

                <Container sx={{margin: "55px auto"}} maxWidth={false} disableGutters>
                    <Box sx={BoxStyles}>
                        <PhotoDiv style={{backgroundImage: `url(${Img})`}}>
                            <Fab color="default" aria-label="add" sx={{position: "relative", top: "100px", left: "100px"}}>
                                <EditIcon />
                            </Fab>
                        </PhotoDiv>

                        <Typography variant="subtitle1" align="center" color="white">
                            John Doe
                        </Typography>
                        <Typography variant="body2" align="center" color="white">
                            Engineer, 21
                        </Typography>
                    </Box>

                    <Container maxWidth={"md"}>
                        <Grid container alignItems="center" justifyContent="space-between" mt={5} mb={5}>
                            <Grid item xs={10}>
                                <Typography variant="h6" color="secondary">GALLERY</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Fab color="secondary" aria-label="edit" sx={{float: "right"}}>
                                    <EditIcon color="info" />
                                </Fab>
                            </Grid>
                        </Grid>
                        <ImageList cols={3} >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <Stack spacing={3} mt={5} mb={5}>
                            <Box mb={2}>
                                <Grid container alignItems="center" justifyContent="space-between">
                                    <Grid item xs={10}>
                                        <Typography variant="h6" color="secondary">ABOUT ME</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Fab color="secondary" aria-label="edit" sx={{float: "right"}}>
                                            <EditIcon color="info" />
                                        </Fab>
                                    </Grid>
                                </Grid>

                                <Stack spacing={3} mt={2}>
                                    <Box>
                                        <Typography variant="h6">Bio</Typography>
                                        <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae facere. Dolor odio cum enim ut rem quia eum nostrum! Harum eligendi pariatur aliquid culpa id deserunt sed temporibus facere.</Typography>
                                    </Box>
                                    <Box >
                                        <Typography variant="h6">Job Title</Typography>
                                        <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae facere. Dolor odio cum enim ut rem quia eum nostrum! Harum eligendi pariatur aliquid culpa id deserunt sed temporibus facere.</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">Company Name</Typography>
                                        <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae facere. Dolor odio cum enim ut rem quia eum nostrum! Harum eligendi pariatur aliquid culpa id deserunt sed temporibus facere.</Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            <Box mb={6}>
                                <Grid container alignItems="center" justifyContent="space-between" mb={2}>
                                    <Grid item xs={10}>
                                        <Typography variant="h6" color="secondary">INTERESTS</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Fab color="secondary" aria-label="edit" sx={{float: "right"}}>
                                            <EditIcon color="info" />
                                        </Fab>
                                    </Grid>
                                </Grid>
                                <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae facere. Dolor odio cum enim ut rem quia eum nostrum! Harum eligendi pariatur aliquid culpa id deserunt sed temporibus facere.</Typography>
                            </Box>

                            <Box mb={4}>
                                <Grid container alignItems="center" justifyContent="space-between" mb={2}>
                                    <Grid item xs={10}>
                                        <Typography variant="h6" color="secondary">INDENTIFY AS</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Fab color="secondary" aria-label="edit" sx={{float: "right"}}>
                                            <EditIcon color="info" />
                                        </Fab>
                                    </Grid>
                                </Grid>
                                <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae facere. Dolor odio cum enim ut rem quia eum nostrum! Harum eligendi pariatur aliquid culpa id deserunt sed temporibus facere.</Typography>
                            </Box>

                            <Button variant="contained" color="primary" size="large" whiteText>
                                Logout
                            </Button>
                            <Button variant="contained" color="error" whiteText>
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
