import Header from "../components/header/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Img from "../assets/images/ben-parker.jpg";
import styled from "styled-components";
import { Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";

import { Button } from "../components/button/index";

const PhotoDiv = styled.div`
    width: 150px;
    height: 150px;
    border: 2px solid white;
    background-image: url(${Img});
    margin: auto;
    border-radius: 75px;
    margin-bottom: 20px;
`;

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
                    //   width: "100%"
                    };
    return (
        <>
            <Header
                text="Edit profile"
                backFunction={() => {
                    alert("Moving back");
                }}
                color="secondary"
            />

            <Container sx={{margin: "55px auto"}} maxWidth={false} disableGutters>
                <Box sx={BoxStyles}>
                    <PhotoDiv />
                    <Typography variant="subtitle1" align="center" color="white">
                        John Doe
                    </Typography>
                    <Typography variant="body2" align="center" color="white">
                        Engineer, 21
                    </Typography>
                </Box>

                <ImageList sx={{ width: window.innerWidth - 2, height: "auto", marginTop: "8" }} cols={3} rowHeight={200}>
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

                <Container maxWidth={"md"}>
                    <Stack spacing={3} mt={2} mb={2}>
                        <Box>
                            <Typography variant="h6">About me</Typography>
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
                        <Box>
                            <Typography variant="h6">Interests</Typography>
                            <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae facere. Dolor odio cum enim ut rem quia eum nostrum! Harum eligendi pariatur aliquid culpa id deserunt sed temporibus facere.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6">Indentify as</Typography>
                            <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, vitae facere. Dolor odio cum enim ut rem quia eum nostrum! Harum eligendi pariatur aliquid culpa id deserunt sed temporibus facere.</Typography>
                        </Box>
                        <Button variant="contained" color="primary">
                            Logout
                        </Button>
                        <Button variant="contained" color="error">
                            Delete account
                        </Button>
                    </Stack>
                </Container>

            </Container>

        </>
    );
};

export default EditProfile;
