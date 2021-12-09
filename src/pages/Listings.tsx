import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuidv1 } from "uuid";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab as MUITab, Box, Grid, Typography, Container, Skeleton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import InvitesModal, { ImgObj } from "../components/invites-modal/InvitesModal";
import { LISTING_TABS } from "../const";
import { useCreateChatUser } from "../utils";
import { Boxed, CardInfo, Card, CardMedia, CardActions, Layout, Error } from "../components";
import { getIsLoading, getLoggedInUser, updateLoading } from "../store/reducers/user";
import { getListingData } from "../store/reducers/matchMaking";
import { OdourlessWrapper } from "../assets/styles/Common.styles";
import { fetchUserListingRequest, updateUserListingRequest } from "../store/sagas/match-making/actions";
import { UserInfo } from "../store/sagas/user/types";

type Item = {
    label: string;
    value: string;
};

const Listing = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const listings = useSelector(getListingData);
    const isLoading = useSelector(getIsLoading);
    const [inviteModalOpen, setInviteModalOpen] = useState(false);
    const toggleInviteModal = () => {
        setInviteModalOpen(!inviteModalOpen);
    };
    const [date, setDate] = useState<Date | null>(new Date());
    const [newDate, setNewDate] = useState<Date | null>(new Date());
    const [pageNumber, setPageNumber] = useState(0);
    const [bookingType, setBookingType] = useState<ImgObj | null>(null);
    const [value, setValue] = useState("likes");
    const [selectedUser, setSelectedUser] = useState<UserInfo>({} as UserInfo);
    const handlePageInc = () => setPageNumber(pageNumber + 1);
    const resetPage = () => setPageNumber(0);

    useEffect(() => {
        const { uid: userId } = user;
        if (userId) {
            dispatch(fetchUserListingRequest({ userId }));
        } else {
            dispatch(updateLoading(true));
        }
    }, [user]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleChatClick = async (item: UserInfo, isMatchesPanel: boolean) => {
        if (isMatchesPanel) {
            await useCreateChatUser(item);
            navigate(`/chatting/${item.uid}`);
        }
    };

    const handleInviteClick = (item: UserInfo, isMatchesPanel: boolean) => {
        if (isMatchesPanel) {
            setSelectedUser(item);
            setInviteModalOpen(true);
        }
    };

    const onSubmit = () => {
        dispatch(
            updateUserListingRequest({
                userId: user.uid || "",
                listingType: "invites",
                selectedUser,
                invitationInfo: {
                    bookingType: bookingType?.title as string,
                    proposedDate: newDate as Date,
                    requestAccepted: false,
                },
            })
        );
    };

    useEffect(() => {
        return () => {
            //resetting page on close
            setTimeout(() => {
                resetPage();
            }, 300);
        };
    }, [inviteModalOpen]);

    const getTabPanelData = (type: string, item: UserInfo) => {
        const isLikesPanel = type === LISTING_TABS[0].value;
        const isMatchesPanel = type === LISTING_TABS[1].value;
        return (
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
                <CardInfo alignment={isLikesPanel ? "bottom" : "top"} imgHeight={200} imgWidth={200}>
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        {item.fullName}
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        {item.profession}
                    </OdourlessWrapper>
                </CardInfo>
                {!isLikesPanel && (
                    <CardInfo alignment="bottom" imgHeight={200} imgWidth={200} hasIcon>
                        <CardActions width={200}>
                            <OdourlessWrapper
                                component={isMatchesPanel ? ConnectWithoutContactIcon : CloseIcon}
                                onClick={() => handleInviteClick(item, isMatchesPanel)}
                                sx={{ cursor: "pointer" }}
                            />
                            <OdourlessWrapper
                                component={isMatchesPanel ? ChatIcon : DoneIcon}
                                onClick={() => handleChatClick(item, isMatchesPanel)}
                                sx={{ cursor: "pointer" }}
                            />
                        </CardActions>
                    </CardInfo>
                )}
            </Card>
        );
    };

    const displayTabItems = (label: string) => {
        const listingValues = Object.values(listings[value] || {});
        return listingValues.length > 0 ? (
            listingValues.map((item): any => {
                return (
                    <Grid item xs={6} key={item.uid}>
                        {getTabPanelData(value, item)}
                    </Grid>
                );
            })
        ) : (
            <Grid item xs={12}>
                <Error errorHeading={label} errorsubText={`No ${label} found`} matchError />
            </Grid>
        );
    };

    const displaySkeleton = () =>
        [1, 2, 3, 4].map(() => (
            <Skeleton key={uuidv1()} variant="rectangular" width={200} height={200} sx={{ m: 1 }}>
                <div style={{ paddingTop: "100%" }} />
            </Skeleton>
        ));

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
                        {LISTING_TABS.map(({ value, label }: Item) => (
                            <TabPanel value={value} sx={{ p: "20px 0" }} key={value}>
                                <Grid container justifyContent="space-between" alignItems="center" wrap="wrap" spacing={2}>
                                    {isLoading ? displaySkeleton() : displayTabItems(label)}
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
                onSubmit={onSubmit}
                setBookingType={setBookingType}
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
