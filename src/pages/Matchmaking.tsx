import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import logo from "../assets/images/logoDateALife40x40.png";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { StyledFab } from "../assets/styles/Fab.styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardMedia, CardInfo, CardActions } from "../components/card";
import {useState, forwardRef} from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Div, ContainerDiv, LogoDiv } from "../assets/styles/Common.styles";
import Logo from "../assets/images/logoDateALife.png";
import {ButtonTextColorWhite} from "../assets/styles/Button.styles";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import styled from "styled-components";
import {ButtonGroup, Button} from "../components/button/index";
import {WarningSlider} from "../assets/styles/Slider.styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SendAMessageButton,
    StyledHeadText,
    StyledBodyText,
    StyledSubTitleText,
    ProfileMatchPictureContainer,
    MatchedProfilePictureOne,
    MatchedProfilePictureTwo,
    CrossButton,
    ContainerDiv2,
    HeaderDiv,
    WhiteBar } from "../assets/styles/Matchmaking.styles";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="down" ref={ref} {...props} />;
  });


const PaddedButton = styled(Button)({
   padding: "10px 25px"
});

const Matchmaking = (): JSX.Element => {
    const [matchMakingOpen, setMatchmakingOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [orientation, setOrientation] = useState("");
    const [sliderValue, setSliderValue] = useState<number[]>([18, 25]);
    const minDistance = 10;


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
        <>
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
                    <CardInfo alignment="top" imgHeight={0} imgWidth={500}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "black",
                                textAlign: "left"
                            }}
                        >
                            Full Name
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "black",
                                textAlign: "left"
                            }}
                        >
                            Profession
                        </Typography>
                    </CardInfo >
                    <CardActions width={500} style={{marginTop: "20px"}}>
                        <StyledFab success={false} aria-label="disliked">
                            <CloseRoundedIcon />
                        </StyledFab>
                        <StyledFab success={true} aria-label="like" onClick={toggleMatchMaking}>
                            <FavoriteIcon />
                        </StyledFab>
                    </CardActions>
                </Card>

                {/* Matchmaking modal */}
                <Dialog
                    open={matchMakingOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={toggleMatchMaking}
                    aria-describedby="matchmaking modal"
                    fullWidth
                    maxWidth="sm"
                    fullScreen
                >
                    <Div>
                        <ContainerDiv>
                            <StyledHeadText align="center" variant="h3" >Match it is</StyledHeadText>
                            <StyledBodyText align="center" variant="subtitle2">Riya likes you too</StyledBodyText>
                            <ProfileMatchPictureContainer>
                                <MatchedProfilePictureOne src={Logo} alt="profile picture" />
                                <MatchedProfilePictureTwo src={Logo} alt="profile picture 2 " />
                            </ProfileMatchPictureContainer>
                            <StyledSubTitleText align="center" variant="subtitle1">You and Riya have 85% match ratio</StyledSubTitleText>
                            <WhiteBar />
                            <SendAMessageButton variant="contained" >
                                Send a message
                            </SendAMessageButton>
                            <ButtonTextColorWhite variant="text" >
                                Keep Searching
                            </ButtonTextColorWhite>
                        </ContainerDiv>
                        <CrossButton onClick={toggleMatchMaking}>
                            <ClearRoundedIcon style={{color: "white"}}/>
                        </CrossButton>
                    </Div>
                </Dialog>

                {/* Filter modal */}
                <Dialog
                    open={filterOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={toggleFilter}
                    aria-describedby="matchmaking modal"
                    fullWidth={true}
                    maxWidth={"xs"}
                    fullScreen
                    style={{
                        height: "400px",
                    }}
                >
                    <ContainerDiv2>
                        <HeaderDiv>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="back icon"
                                onClick={toggleFilter}>
                                <ArrowBackRoundedIcon />
                            </IconButton>

                                Filter

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="apply icon"
                                onClick={toggleFilter}>
                                <CheckRoundedIcon color="error" />
                            </IconButton>
                        </HeaderDiv>

                        <ContainerDiv2>
                            <Typography variant="subtitle1">Gender</Typography>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" color="warning">
                                <PaddedButton color="warning" curved>Male</PaddedButton>
                                <PaddedButton color="warning" curved>Female</PaddedButton>
                                <PaddedButton color="inherit" curved>Others</PaddedButton>
                            </ButtonGroup>
                        </ContainerDiv2>
                        <ContainerDiv2>
                            <HeaderDiv>
                                <Typography variant="subtitle1">Age</Typography>
                                <Typography variant="body2" color="info">{sliderValue[0]} - {sliderValue[1]} </Typography>
                            </HeaderDiv>
                            <WarningSlider
                                getAriaLabel={() => "Minimum distance"}
                                value={sliderValue}
                                onChange={handleAgeSliderChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                min={18}
                                max={80}
                            />
                        </ContainerDiv2>

                        <ContainerDiv2>
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
                                    <MenuItem value={"Straight"}>Straight</MenuItem>
                                    <MenuItem value={"Gay/Lesbian"}>Gay/Lesbian</MenuItem>
                                    <MenuItem value={"Bisexual"}>Bisexual</MenuItem>
                                    <MenuItem value={"Pansexual"}>Pansexual</MenuItem>
                                    <MenuItem value={"Transexual"}>Transexual</MenuItem>
                                </Select>
                            </FormControl>
                        </ContainerDiv2>
                    </ContainerDiv2>
                </Dialog>
            </div>
        </>
    );
};

export default Matchmaking;
