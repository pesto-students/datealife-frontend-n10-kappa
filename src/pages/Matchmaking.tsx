import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import logo from "../assets/images/logoDateALife40x40.png";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Fab  from "../components/fab/Fab";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardMedia, CardInfo, CardActions } from "../components/card";
import {useState} from "react";
import { OdourlessWrapper } from "../assets/styles/Common.styles";
import Logo from "../assets/images/logoDateALife.png";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Slider from "../components/slider/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Layout, ToggleButton, ToggleButtonGroup } from "../components";
import Modal from "../components/modal/Modal";
import Boxed from "../components/boxed/Boxed";
import { GENDER_VALUES, ORIENTATION_VALUES } from "../const";
import { Grid, Stack, Container } from "@mui/material";
import { Button } from "../components/button/index";
import { CrossButton, WhiteBar } from "../assets/styles/Common.styles";
import MatchedPitctures from "../components/matchedPictures/MatchedPictures";

const Matchmaking = (): JSX.Element => {
    const [matchMakingOpen, setMatchmakingOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [orientation, setOrientation] = useState("");
    const [sliderValue, setSliderValue] = useState<number[]>([18, 25]);
    const minDistance = 10;
    const [gender, setGender] = useState(GENDER_VALUES[0].toLocaleLowerCase());
    const handleGenderChange = (
        event: React.MouseEvent<HTMLElement>,
        newGender: string,
      ) => {
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

    const handleAgeSliderChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
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
                backFunction: () => {}
            }}
            displayHeader={false}
        >
            <AppBar position="static" sx={{ backgroundColor: "white"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="user icon">
                        <PersonOutlineIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
                        <img src ={logo} alt="Date a life logo" />
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="filter icon"
                        onClick={toggleFilter}>
                        <FilterAltOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div style={{marginTop: "20px"}}>
                <Container maxWidth="md">
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
                <Modal modalOpen={matchMakingOpen} toggleModal={toggleMatchMaking} ariaLabel={"new match modal"}>
                    <Boxed type="backgroundShine">
                        <>
                            <CrossButton onClick={toggleMatchMaking}>
                                <ClearRoundedIcon style={{color: "white"}}/>
                            </CrossButton>
                            <Boxed type="full">
                                <Container>
                                    <Typography align="center" variant="h3" color="white" style={{
                                        fontFamily: "DancingScript-Regular",
                                        paddingTop: "80px"}}>
                                        Match it is
                                    </Typography>
                                    <Typography align="center" variant="subtitle2" mt={4} color="white">Riya likes you too</Typography>
                                    <MatchedPitctures imgUrl1={Logo} imgUrl2={Logo} styles={{margin: "40px auto 30px"}} />
                                    <Typography align="center" variant="subtitle1" fontStyle="italic" color="white">You and Riya have 85% match ratio</Typography>
                                    <WhiteBar />
                                    <Stack>
                                        <Button variant="contained" whiteText size="large" curved sx={{margin: "25px auto 15px", width: "250px"}}>
                                            Send a message
                                        </Button>
                                        <Button variant="text" whiteText>
                                            Keep Searching
                                        </Button>
                                    </Stack>
                                </Container>
                            </Boxed>
                        </>
                    </Boxed>
                </Modal>

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
                                        onClick={toggleFilter}>
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
                                        onClick={toggleFilter}>
                                        <CheckRoundedIcon color="error" />
                                    </IconButton>
                                </Grid>
                            </Grid>

                            <Boxed>
                                <Stack>
                                    <Typography variant="subtitle1" mb={1}>Gender</Typography>
                                    <ToggleButtonGroup
                                    value={gender}
                                    exclusive
                                    onChange={handleGenderChange}
                                    aria-label="outlined primary button group">
                                    {GENDER_VALUES.map((gender, index) => {
                                        return (<ToggleButton value={gender.toLocaleLowerCase()} curved={index === 0 || index === GENDER_VALUES.length -1} key={index}>
                                                    {gender}
                                                </ToggleButton>);
                                    })}</ToggleButtonGroup>
                                </Stack>
                            </Boxed>

                            <Boxed>
                                <>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle1">Age</Typography>
                                        </Grid>
                                        <Grid item xs={6} textAlign="right">
                                            <Typography variant="body2" color="warning">{sliderValue[0]} - {sliderValue[1]} </Typography>
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
                                    <InputLabel id="orientation-label" color="warning">Orientation</InputLabel>
                                    <Select
                                        labelId="orientation-label"
                                        id="orientation-select"
                                        value={orientation}
                                        label="orientation"
                                        onChange={handleOrientationChange}
                                        color="warning"
                                    >
                                        {ORIENTATION_VALUES.map((orientation) => {
                                            return (<MenuItem value={orientation}>
                                                        {orientation}
                                                    </MenuItem>);
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
