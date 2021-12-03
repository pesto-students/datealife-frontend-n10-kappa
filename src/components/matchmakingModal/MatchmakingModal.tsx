import { Container, Typography, Stack } from "@mui/material";
import { ReactElement } from "react";
import { Modal, Boxed, Bar, Button, MatchedPitctures } from "..";
import { CrossButton } from "../../assets/styles/Common.styles";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const MatchmakingModal = (props: MatchmakingModalProps): ReactElement => {
    return (
            <Modal modalOpen={props.matchMakingOpen} toggleModal={props.toggleMatchMaking} ariaLabel={"new match modal"}>
            <Boxed type="backgroundShine">
                <>
                    <CrossButton onClick={props.toggleMatchMaking}>
                        <ClearRoundedIcon style={{ color: "white" }} />
                    </CrossButton>
                    <Boxed type="full">
                        <Container>
                            <Typography
                                align="center"
                                variant="h3"
                                color="white"
                                style={{
                                    fontFamily: "DancingScript-Regular",
                                    paddingTop: "80px",
                                }}
                            >
                                Match it is
                            </Typography>
                            <Typography align="center" variant="subtitle2" mt={4} color="white">
                                {props.matchUserName} likes you too
                            </Typography>
                            <MatchedPitctures imgUrl1={props.pictureUrl1} imgUrl2={props.pictureUrl2} styles={{ margin: "40px auto 30px" }} />
                            <Typography align="center" variant="subtitle1" fontStyle="italic" color="white">
                                You and {props.matchUserName} have {props.matchUserPercentage}% match ratio
                            </Typography>
                            <Bar />
                            <Stack>
                                <Button
                                    variant="contained"
                                    whiteText
                                    size="large"
                                    curved
                                    sx={{ margin: "25px auto 15px", width: "250px" }}
                                    onClick={props.chatRedirect}
                                >
                                    Send a message
                                </Button>
                                <Button variant="text" whiteText onClick={props.toggleMatchMaking}>
                                    Keep Searching
                                </Button>
                            </Stack>
                        </Container>
                    </Boxed>
                </>
            </Boxed>
        </Modal>
    );
};

export default MatchmakingModal;

interface MatchmakingModalProps {
    toggleMatchMaking: () => void;
    matchMakingOpen: boolean;
    pictureUrl1: string;
    pictureUrl2: string;
    matchUserName: string;
    matchUserPercentage: string;
    chatRedirect: () => void;

}
