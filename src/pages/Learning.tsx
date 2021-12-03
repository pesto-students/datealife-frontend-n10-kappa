import Typography from "@mui/material/Typography";
import { CardInfo, Card, CardMedia, Layout } from "../components";
import { OdourlessWrapper } from "../assets/styles/Common.styles";
import { Container, Grid, IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import {ToggleButton, ToggleButtonGroup} from "../components/toogle-button/index";
import Boxed from "../components/boxed/Boxed";
import { CURRENT_LEARNING_KEY, GENDER_VALUES } from "../const";
import { useDispatch, useSelector } from "react-redux";
import { fetchLearningListRequest } from "../store/sagas/learning/actions";
import { useEffect } from "react";
import { getLearningList } from "../store/reducers/learnings";
import {Learning as LearningType} from "../store/sagas/learning/types";
import { useNavigate } from "react-router-dom";


const Learning = (): JSX.Element => {
    const dispatch = useDispatch();
    const [filterOpen, setFilterOpen] = useState(false);
    const [gender, setGender] = useState(GENDER_VALUES[0].toLocaleLowerCase());
    const learningList = useSelector(getLearningList);
    const navigate = useNavigate();

    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    const handleGenderChange = (
      event: React.MouseEvent<HTMLElement>,
      newGender: string,
    ) => {
        setGender(newGender);
    };

    const handleCardClick = (index: number) => {
        const currentLearning =  learningList[index];
        window.localStorage.setItem(CURRENT_LEARNING_KEY, JSON.stringify(currentLearning));
        navigate(`/learning/${currentLearning.id}/${currentLearning.title.split(" ").join("-")}`);
    };

    useEffect(() => {
        dispatch(fetchLearningListRequest());
    }, []);

    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Learning",
                backFunction: () => navigate("/home")
            }}
        >
            <Container maxWidth="md">
                <IconButton sx={{
                            position: "fixed",
                            right: "20px",
                            top: "8px",
                            zIndex: "1100",
                    }} onClick={toggleFilter}>
                    <FilterAltOutlinedIcon />
                </IconButton>

                <>
                    {learningList.map((learning: LearningType, index: number): any => {
                        return (
                            <Card sx={{ p: "10px 0" }} key={learning.id} onClick={() => handleCardClick(index)}>
                                <CardMedia
                                    src={learning.imgUrl}
                                    alt={`${learning.title} img`}
                                    onError={(event: any) => {
                                        if (event.target)
                                            event.target.src =
                                                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                                    }}
                                    width={900}
                                    height={300}
                                />
                                <CardInfo alignment="bottom" imgHeight={300} imgWidth={800}>
                                    <OdourlessWrapper variant="h5" component={Typography}>
                                        {learning.title}
                                    </OdourlessWrapper>
                                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                                        {learning.author}
                                    </OdourlessWrapper>
                                </CardInfo>
                            </Card>
                        );
                    })}
                </>
            </Container>

            {/* Filter modal */}
            <Modal modalOpen={filterOpen} toggleModal={toggleFilter} ariaLabel={"learning filter modal"}>
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
                            <>
                                <Typography variant="subtitle1" mb={2}>Gender</Typography>
                                <ToggleButtonGroup
                                    value={gender}
                                    exclusive
                                    onChange={handleGenderChange}>
                                    {GENDER_VALUES.map((gender, index) => {
                                        return (<ToggleButton value={gender.toLocaleLowerCase()} curved={index === 0 || index === GENDER_VALUES.length -1} key={index}>
                                                    {gender}
                                                </ToggleButton>);
                                    })}
                                </ToggleButtonGroup>
                            </>
                        </Boxed>
                   </>
                </Boxed>
            </Modal>
        </Layout>
    );
};

export default Learning;
