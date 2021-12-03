import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    Grid,
    Stack,
    Container,
    Toolbar,
    MenuItem,
    AppBar,
    Typography,
    FormControl,
    Select,
    IconButton,
    InputLabel,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {
    Boxed,
    Fab,
    Card,
    CardMedia,
    CardInfo,
    CardActions,
    Slider,
    Layout,
    ToggleButton,
    ToggleButtonGroup,
    Modal,
    MatchmakingModal,
} from "../components";
import { GENDER_VALUES, ORIENTATION_VALUES } from "../const";
import { OdourlessWrapper } from "../assets/styles/Common.styles";
import logo from "../assets/images/logoDateALife40x40.png";
import Logo from "../assets/images/logoDateALife.png";
import { getLoggedInUser } from "../store/reducers/login";
import { getUserSuggestions } from "../store/reducers/matchMaking";
import { fetchUserSuggestionsRequest } from "../store/sagas/match-making/actions";

const Matchmaking = (): JSX.Element => {
    const user = useSelector(getLoggedInUser);
    const suggestions = useSelector(getUserSuggestions);
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
            fetchUserSuggestionsRequest({ userId });
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

    function valuetext(value: number) {
        return `${value}`;
    }

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
                    <IconButton size="large" edge="start" color="inherit" aria-label="user icon">
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
                    <Card>
                        <CardMedia
                            src={suggestions[0]?.profilePicture}
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
                        <Container maxWidth="md">
                            <CardActions width={500}>
                                <Fab success={false} aria-label="disliked">
                                    <CloseRoundedIcon />
                                </Fab>
                                <Fab success={true} aria-label="like" onClick={toggleMatchMaking}>
                                    <FavoriteIcon />
                                </Fab>
                            </CardActions>
                        </Container>
                    </Card>
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
                <Modal modalOpen={filterOpen} toggleModal={toggleFilter} ariaLabel={"matchmaking filter modal"}>
                    <Boxed>
                        <>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="back icon"
                                        onClick={toggleFilter}
                                    >
                                        <ArrowBackRoundedIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} textAlign="center">
                                    Filter
                                </Grid>
                                <Grid item xs={4} textAlign="right">
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="apply icon"
                                        onClick={toggleFilter}
                                    >
                                        <CheckRoundedIcon color="error" />
                                    </IconButton>
                                </Grid>
                            </Grid>

                            <Boxed>
                                <Stack>
                                    <Typography variant="subtitle1" mb={1}>
                                        Gender
                                    </Typography>
                                    <ToggleButtonGroup
                                        value={gender}
                                        exclusive
                                        onChange={handleGenderChange}
                                        aria-label="outlined primary button group"
                                    >
                                        {GENDER_VALUES.map((gender, index) => {
                                            return (
                                                <ToggleButton
                                                    value={gender.toLocaleLowerCase()}
                                                    curved={index === 0 || index === GENDER_VALUES.length - 1}
                                                    key={gender}
                                                >
                                                    {gender}
                                                </ToggleButton>
                                            );
                                        })}
                                    </ToggleButtonGroup>
                                </Stack>
                            </Boxed>

                            <Boxed>
                                <>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle1">Age</Typography>
                                        </Grid>
                                        <Grid item xs={6} textAlign="right">
                                            <Typography variant="body2" color="warning">
                                                {sliderValue[0]} - {sliderValue[1]}{" "}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Slider
                                        getAriaLabel={() => "Minimum distance"}
                                        value={sliderValue}
                                        onChange={handleAgeSliderChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        min={18}
                                        max={80}
                                    />
                                </>
                            </Boxed>

                            <Boxed>
                                <FormControl fullWidth>
                                    <InputLabel id="orientation-label" color="warning">
                                        Orientation
                                    </InputLabel>
                                    <Select
                                        labelId="orientation-label"
                                        id="orientation-select"
                                        value={orientation}
                                        label="orientation"
                                        onChange={handleOrientationChange}
                                        color="warning"
                                    >
                                        {ORIENTATION_VALUES.map((orientation) => {
                                            return (
                                                <MenuItem value={orientation.toLowerCase()} key={orientation}>
                                                    {orientation}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Boxed>
                        </>
                    </Boxed>
                </Modal>
            </div>
        </Layout>
    );
};

export default Matchmaking;
