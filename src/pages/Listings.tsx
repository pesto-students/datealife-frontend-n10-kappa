import { useState, useEffect } from "react";

import { TabContext, TabList, TabPanel, TimePicker } from "@mui/lab";
import {
    Tab as MUITab,
    Box,
    Grid,
    Typography,
    Container,
    IconButton,
    ImageListItem,
    ImageListItemBar,
    ImageList,
    Stack,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Boxed, Button, CardInfo, Card, CardMedia, CardActions, Layout, Modal } from "../components";
import { CrossButton, OdourlessWrapper, StyledBody } from "../assets/styles/Common.styles";

type Item = {
    label: string;
    value: string;
};

const Listing = (): JSX.Element => {
    const items = [
        {
            label: "Likes",
            value: "likes",
        },
        {
            label: "Matches",
            value: "matches",
        },
        {
            label: "Invites",
            value: "invites",
        },
    ];

    const [inviteModalOpen, setInviteModalOpen] = useState(false);
    const toggleInviteModal = () => {
        setInviteModalOpen(!inviteModalOpen);
    };
    const [date, setDate] = useState<Date | null>(new Date());
    const [newDate, setNewDate] = useState<Date | null>(new Date());
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState("likes");

    const handleCounter = () => setCounter(counter + 1);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setCounter(0);
            }, 300);
        };
    }, [inviteModalOpen]);

    // should ne replaced with actual data
    const tabPanelData: any = {
        likes: (
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
                <CardInfo alignment="bottom" imgHeight={200} imgWidth={200}>
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        Full Name
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        Profession
                    </OdourlessWrapper>
                </CardInfo>
            </Card>
        ),
        matches: (
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
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        Full Name
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        Profession
                    </OdourlessWrapper>
                </CardInfo>
                <CardInfo alignment="bottom" imgHeight={200} imgWidth={200} hasIcon>
                    <CardActions width={200}>
                        <OdourlessWrapper component={ConnectWithoutContactIcon} />
                        <OdourlessWrapper component={ChatIcon} />
                    </CardActions>
                </CardInfo>
            </Card>
        ),
        invites: (
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
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        Full Name
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        Profession
                    </OdourlessWrapper>
                </CardInfo>
                <CardInfo alignment="bottom" imgHeight={200} imgWidth={200} hasIcon>
                    <CardActions width={200}>
                        <OdourlessWrapper component={CloseIcon} onClick={toggleInviteModal} />
                        <OdourlessWrapper component={DoneIcon} />
                    </CardActions>
                </CardInfo>
            </Card>
        ),
    };

    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Likes / Matches",
                backFunction: () => {},
            }}
        >
            <StyledBody>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
                            {items.map(({ label, value }: Item) => (
                                <MUITab label={label} value={value} key={value} />
                            ))}
                        </TabList>
                    </Box>
                    {items.map(({ value }: Item) => (
                        <TabPanel value={value} sx={{ p: "20px 0" }}>
                            <Grid container justifyContent="space-between" alignItems="center" wrap="wrap" spacing={2}>
                                {[1, 2, 3, 4].map((item): any => {
                                    return (
                                        <Grid item xs={6} key={item}>
                                            {tabPanelData[value]}
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </TabPanel>
                    ))}
                </TabContext>
            </StyledBody>
            {/* Matchmaking modal */}
            <Modal modalOpen={inviteModalOpen} toggleModal={toggleInviteModal} ariaLabel={"invites modal"}>
                <>
                    {counter !== 2 && (
                        <Container>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={2}>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="back icon"
                                        onClick={toggleInviteModal}
                                    >
                                        <ArrowBackRoundedIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={8} textAlign="center">
                                    Schedule a meeting
                                </Grid>
                                <Grid item xs={2} textAlign="right">
                                    {counter === 1 && (
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="apply icon"
                                            onClick={handleCounter}
                                        >
                                            <CheckRoundedIcon color="error" />
                                        </IconButton>
                                    )}
                                </Grid>
                            </Grid>
                        </Container>
                    )}

                    {counter === 0 && (
                        <Container sx={{ overflowY: "scroll", maxHeight: "100vh" }}>
                            <ImageList>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img} onClick={handleCounter}>
                                        <img
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.author}
                                            actionIcon={
                                                <IconButton
                                                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                                    aria-label={`info about ${item.title}`}
                                                ></IconButton>
                                            }
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Container>
                    )}

                    {counter === 1 && (
                        <Container>
                            <>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <Grid container justifyContent="center" mb={4}>
                                    <Stack spacing={2} direction="row">
                                        <TimePicker
                                            value={date}
                                            onChange={setDate}
                                            renderInput={(params) => <TextField {...params} />}
                                        />

                                        <TimePicker
                                            value={newDate}
                                            onChange={setNewDate}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </Grid>
                            </>
                        </Container>
                    )}

                    {counter === 2 && (
                        <Boxed type="invites">
                            <Boxed type="backgroundShine2">
                                <Stack>
                                    <Typography
                                        align="center"
                                        variant="h3"
                                        color="white"
                                        style={{
                                            fontFamily: "DancingScript-Regular",
                                            paddingTop: "80px",
                                        }}
                                    >
                                        Invite Sent
                                    </Typography>
                                    <CrossButton onClick={toggleInviteModal}>
                                        <ClearRoundedIcon style={{ color: "white" }} />
                                    </CrossButton>
                                    <Boxed>
                                        <Container maxWidth="md">
                                            <Button
                                                variant="contained"
                                                color="warning"
                                                fullWidth
                                                curved
                                                style={{ marginTop: "30px", color: "white", padding: "10px" }}
                                                onClick={toggleInviteModal}
                                            >
                                                Return to matches
                                            </Button>
                                        </Container>
                                    </Boxed>
                                </Stack>
                            </Boxed>
                        </Boxed>
                    )}
                </>
            </Modal>
        </Layout>
    );
};

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        author: "@helloimnik",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        author: "@nolanissac",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        author: "@hjrc33",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
        author: "@tjdragotta",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
        author: "@katie_wasserman",
    },
];

export default Listing;
