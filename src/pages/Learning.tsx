import Typography from "@mui/material/Typography";
import { CardInfo, Card, CardMedia, Layout } from "../components";
import { OdourlessWrapper, StyledBody } from "../assets/styles/Common.styles";
import { Grid, IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import {ToggleButton, ToggleButtonGroup} from "../components/toogle-button/index";
import Boxed from "../components/boxed/Boxed";
import { GENDER_VALUES } from "../const";

const Learning = (): JSX.Element => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [gender, setGender] = useState(GENDER_VALUES[0].toLocaleLowerCase());

    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    const handleGenderChange = (
      event: React.MouseEvent<HTMLElement>,
      newGender: string,
    ) => {
        setGender(newGender);
    };

    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Learning",
                backFunction: () => {}
            }}
        >
            <StyledBody>
                <IconButton sx={{
                            position: "fixed",
                            right: "20px",
                            top: "8px",
                            zIndex: "1100",
                    }} onClick={toggleFilter}>
                    <FilterAltOutlinedIcon />
                </IconButton>

                {[1, 2, 3, 4].map((item): any => {
                    return (
                        <Card sx={{ p: "10px 0" }} key={item}>
                            <CardMedia
                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                                alt="Paella dish"
                                onError={(event: any) => {
                                    if (event.target)
                                        event.target.src =
                                            "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                                }}
                                width={500}
                                height={300}
                            />
                            <CardInfo alignment="bottom" imgHeight={300} imgWidth={500}>
                                <OdourlessWrapper variant="h5" component={Typography}>
                                    Full Name
                                </OdourlessWrapper>
                                <OdourlessWrapper variant="subtitle1" component={Typography}>
                                    Profession
                                </OdourlessWrapper>
                            </CardInfo>
                        </Card>
                    );
                })}
            </StyledBody>

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
                                        return (<ToggleButton value={gender.toLocaleLowerCase()} curved={index === 0 || index === GENDER_VALUES.length -1}>
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
