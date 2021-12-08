import { Container, Toolbar, MenuItem, AppBar, Typography, FormControl } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material/Select";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Fab, Card, CardMedia, CardInfo, CardActions, Layout, MatchmakingModal, Error } from "../components";
import { GENDER_VALUES } from "../const";
import { OdourlessWrapper } from "../assets/styles/Common.styles";
import logo from "../assets/images/logoDateALife40x40.png";
import Logo from "../assets/images/logoDateALife.png";
import MatchmakingFilterModal from "../components/matchmaking-filter-modal/MatchmakingFilterModal";
import { getLoggedInUser } from "../store/reducers/user";
import { getCurrentSuggestion } from "../store/reducers/matchMaking";
import {
    fetchUserListingRequest,
    fetchUserSuggestionsRequest,
    updateUserListingRequest,
} from "../store/sagas/match-making/actions";

const Matchmaking = (): JSX.Element => {
    const dispatch = useDispatch();
    const user = useSelector(getLoggedInUser);
    const currentSuggestion = useSelector(getCurrentSuggestion);
    const [matchMakingOpen, setMatchmakingOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [orientation, setOrientation] = useState("");
    const [sliderValue, setSliderValue] = useState<number[]>([18, 25]);
    const minDistance = 10;
    const navigate = useNavigate();
    const [gender, setGender] = useState(GENDER_VALUES[0].toLocaleLowerCase());

    useEffect(() => {
        const { uid: userId } = user;
        if (userId) {
            dispatch(fetchUserListingRequest({ userId }));
            dispatch(fetchUserSuggestionsRequest({ user }));
        }
    }, [user]);

    const handleGenderChange = (event: React.MouseEvent<HTMLElement>, newGender: string) => {
        setGender(newGender);
    };

    const toggleMatchMaking = () => {
        setMatchmakingOpen(!matchMakingOpen);
    };

    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    const handleOrientationChange = (event: SelectChangeEvent) => {
        setOrientation(event.target.value as string);
    };

    const handleAgeSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setSliderValue([Math.min(newValue[0], sliderValue[1] - minDistance), sliderValue[1]]);
        } else {
            setSliderValue([sliderValue[0], Math.max(newValue[1], sliderValue[0] + minDistance)]);
        }
    };

    const handleClick = (actionType: string) => {
        dispatch(
            updateUserListingRequest({
                userId: user.uid || "",
                listingType: actionType,
                selectedUser: currentSuggestion,
            })
        );
    };

    function valuetext(value: number) {
        return `${value}`;
    }

    const handleEditProfile = () => {
        navigate("/user/profile/editProfile");
    };

    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Matches",
                backFunction: () => {},
            }}
            displayHeader={false}
        >
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="user icon" onClick={handleEditProfile}>
                        <PersonOutlineIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
                        <img src={logo} alt="Date a life logo" />
                    </Typography>
                    <IconButton size="large" edge="start" color="inherit" aria-label="filter icon" onClick={toggleFilter}>
                        <FilterAltOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div style={{ marginTop: "20px" }}>
                <Container maxWidth="md">
                    {currentSuggestion.uid ? (
                        <Card>
                            <CardMedia
                                src={currentSuggestion?.profilePicture}
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
                                    {currentSuggestion?.fullName}
                                </OdourlessWrapper>
                                <OdourlessWrapper variant="subtitle2" component={Typography}>
                                    {currentSuggestion?.profession}
                                </OdourlessWrapper>
                            </CardInfo>
                            <Container maxWidth="md">
                                <CardActions width={500}>
                                    <Fab success={false} aria-label="dislike button" onClick={() => handleClick("dislikes")}>
                                        <CloseRoundedIcon />
                                    </Fab>
                                    <Fab success={true} aria-label="like button" onClick={() => handleClick("likes")}>
                                        <FavoriteIcon />
                                    </Fab>
                                </CardActions>
                            </Container>
                        </Card>
                    ) : (
                        <Error errorHeading="Match Making" errorsubText="No Suggestions found" matchError />
                    )}
                </Container>

                {/* Matchmaking modal */}
                <MatchmakingModal
                    toggleMatchMaking={toggleMatchMaking}
                    matchMakingOpen={matchMakingOpen}
                    pictureUrl1={Logo}
                    pictureUrl2={Logo}
                    matchUserName="Riya"
                    matchUserPercentage="85"
                    chatRedirect={() => navigate("/chatting")}
                />

                {/* Filter modal */}
                <MatchmakingFilterModal
                    toggleFilter={toggleFilter}
                    filterOpen={filterOpen}
                    applyFilter={toggleFilter}
                    currentGender={gender}
                    handleGenderChange={handleGenderChange}
                    sliderValue={sliderValue}
                    handleAgeSliderChange={handleAgeSliderChange}
                    valuetext={valuetext}
                    currentOrientation={orientation}
                    handleOrientationChange={handleOrientationChange}
                />
            </div>
        </Layout>
    );
};

export default Matchmaking;
