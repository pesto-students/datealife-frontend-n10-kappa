import Typography from "@mui/material/Typography";
import { CardInfo, Card, CardMedia, Layout } from "../components";
import { OdourlessWrapper, StyledBody } from "../assets/styles/Common.styles";
import { IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {ButtonGroup, Button} from "../components/button/index";
import Modal from "../components/modal/Modal";
import { ContainerDiv2, HeaderDiv} from "../assets/styles/Matchmaking.styles";
import { useState } from "react";
import styled from "styled-components";

const PaddedButton = styled(Button)({
    padding: "10px 25px"
});

const Learning = (): JSX.Element => {
    const [filterOpen, setFilterOpen] = useState(false);
    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
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
                            <PaddedButton color="inherit" curved>Male</PaddedButton>
                            <PaddedButton color="warning" curved>Female</PaddedButton>
                            <PaddedButton color="inherit" curved>Others</PaddedButton>
                        </ButtonGroup>
                    </ContainerDiv2>
                </ContainerDiv2>
            </Modal>
        </Layout>



    );
};

export default Learning;
