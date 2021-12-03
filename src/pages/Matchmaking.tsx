import { useState } from "react";
import { Container, Toolbar, MenuItem, AppBar, Typography, FormControl } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { SelectChangeEvent } from "@mui/material/Select";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {
    Fab,
    Card,
    CardMedia,
    CardInfo,
    CardActions,
    Layout,
    MatchmakingModal
} from "../components";
import { GENDER_VALUES } from "../const";
import { OdourlessWrapper } from "../assets/styles/Common.styles";
import logo from "../assets/images/logoDateALife40x40.png";
import Logo from "../assets/images/logoDateALife.png";
import { useNavigate } from "react-router-dom";
import MatchmakingFilterModal from "../components/matchmaking-filter-modal/MatchmakingFilterModal";

const Matchmaking = (): JSX.Element => {
    const [matchMakingOpen, setMatchmakingOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [orientation, setOrientation] = useState("");
    const [sliderValue, setSliderValue] = useState<number[]>([18, 25]);
    const minDistance = 10;
    const navigate = useNavigate();
    const [gender, setGender] = useState(GENDER_VALUES[0].toLocaleLowerCase());
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
