import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
    Tab as MUITab,
    Box,
    Grid,
    Typography,
    Container
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import InvitesModal from "../components/invites-modal/InvitesModal";
import { LISTING_TABS } from "../const";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Boxed, CardInfo, Card, CardMedia, CardActions, Layout, Modal } from "../components";
import { getLoggedInUser } from "../store/reducers/login";
import { getListingData } from "../store/reducers/matchMaking";
import { OdourlessWrapper } from "../assets/styles/Common.styles";
import { fetchUserListingRequest } from "../store/sagas/match-making/actions";

type Item = {
    label: string;
    value: string;
};

const Listing = (): JSX.Element => {
    const dispatch = useDispatch();
    const user = useSelector(getLoggedInUser);
    const listings = useSelector(getListingData);
    const [inviteModalOpen, setInviteModalOpen] = useState(false);
    const toggleInviteModal = () => {
        setInviteModalOpen(!inviteModalOpen);
    };
    const [date, setDate] = useState<Date | null>(new Date());
    const [newDate, setNewDate] = useState<Date | null>(new Date());
    const [pageNumber, setPageNumber] = useState(0);
    const [value, setValue] = useState("likes");
    const handlePageInc = () => setPageNumber(pageNumber + 1);
    const resetPage = () => setPageNumber(0);

    useEffect(() => {
        const { uid: userId } = user;
        if (userId) {
            dispatch(fetchUserListingRequest({ userId }));
        }
    }, [user]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        return () => {
            //resetting page on close
            setTimeout(() => {
                resetPage();
            }, 300);
        };
    }, [inviteModalOpen]);

    // should ne replaced with actual data
    const tabPanelData: any = {
        likes: (item: any) => (
            <Card>
                <CardMedia
                    src={item.profilePicture}
                    alt={`${item.fullName} image`}
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
                        {item.fullName}
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        {item.profession}
                    </OdourlessWrapper>
                </CardInfo>
            </Card>
        ),
        matches: (item: any) => (
            <Card>
                <CardMedia
                    src={item.profilePicture}
                    alt={`${item.fullName} image`}
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
                        {item.fullName}
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        {item.profession}
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
        invites: (item: any) => (
            <Card>
                <CardMedia
                    src={item.profilePicture}
                    alt={`${item.fullName} image`}
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
                        {item.fullName}
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        {item.profession}
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
            <Boxed type="error">
                <Container maxWidth="md">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
                                {LISTING_TABS.map(({ label, value }: Item) => (
                                    <MUITab label={label} value={value} key={value} />
                                ))}
                            </TabList>
                        </Box>
                        {LISTING_TABS.map(({ value }: Item) => (
                            <TabPanel value={value} sx={{ p: "20px 0" }}>
                                <Grid container justifyContent="space-between" alignItems="center" wrap="wrap" spacing={2}>
                                    {listings[value] &&
                                        Object.values(listings[value]).map((item): any => {
                                            return (
                                                <Grid item xs={6} key={item.uid}>
                                                    {tabPanelData[value](item)}
                                                </Grid>
                                            );
                                        })}
                                </Grid>
                            </TabPanel>
                        ))}
                    </TabContext>
                </Container>
            </Boxed>

            <InvitesModal
                inviteModalOpen={inviteModalOpen}
                toggleInviteModal={toggleInviteModal}
                pageNumber={pageNumber}
                handlePageInc={handlePageInc}
                resetPage={resetPage}
                itemData={itemData}
                currentDate={date}
                currentDateHandler={setDate}
                nextDate={newDate}
                nextDateHandler={setNewDate}
            />
        </Layout>
    );
};

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
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
