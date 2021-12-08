import { StaticDatePicker, TimePicker } from "@mui/lab";
import { Container, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, TextField, Stack, Typography } from "@mui/material";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { Modal, Boxed, Button } from "..";
import { CrossButton } from "../../assets/styles/Common.styles";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const InvitesModal = (props: InvitesModalProps): ReactElement => {
    return (
            <Modal modalOpen={props.inviteModalOpen} toggleModal={props.toggleInviteModal} ariaLabel={"invites modal"}>
                <>
                    {props.pageNumber !== 2 && (
                        <Container>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={2}>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="back icon"
                                        onClick={props.pageNumber !== 1 ? props.toggleInviteModal : props.resetPage}
                                        data-testid="cross-button"
                                    >
                                        <ArrowBackRoundedIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={8} textAlign="center">
                                    Schedule a meeting
                                </Grid>
                                <Grid item xs={2} textAlign="right">
                                    {props.pageNumber === 1 && (
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="apply icon"
                                            onClick={props.handlePageInc}
                                            data-testid="apply-button">
                                            <CheckRoundedIcon color="error" />
                                        </IconButton>
                                    )}
                                </Grid>
                            </Grid>
                        </Container>
                    )}

                    {props.pageNumber === 0 && (
                        <Container sx={{ overflowY: "scroll", maxHeight: "100vh" }} data-testid="food-section">
                            <ImageList>
                                {props.itemData.map((item: any) => (
                                    <ImageListItem key={item.img} onClick={props.handlePageInc} rows={2}>
                                        <img
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.author}
                                            actionIcon={
                                                <IconButton
                                                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                                    aria-label={`info about ${item.title}`}
                                                ></IconButton>
                                            }
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Container>
                    )}

                    {props.pageNumber === 1 && (
                        <Container data-testid="calendar-section">
                            <>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    value={props.currentDate}
                                    onChange={(newValue: any) => {
                                        props.currentDateHandler(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <Grid container justifyContent="center" mb={4}>
                                    <Stack spacing={2} direction="row">
                                        <TimePicker
                                            value={props.currentDate}
                                            onChange={props.currentDateHandler}
                                            renderInput={(params) => <TextField {...params} />}
                                        />

                                        <TimePicker
                                            value={props.nextDate}
                                            onChange={props.nextDateHandler}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </Grid>
                            </>
                        </Container>
                    )}

                    {props.pageNumber === 2 && (
                        <Boxed type="invites">
                                <Stack>
                                    <Typography
                                        align="center"
                                        variant="h3"
                                        color="white"
                                        style={{
                                            fontFamily: "DancingScript-Regular",
                                            paddingTop: "80px",
                                        }}
                                    >
                                        Invite Sent
                                    </Typography>
                                    <CrossButton onClick={props.toggleInviteModal}>
                                        <ClearRoundedIcon style={{ color: "white" }} />
                                    </CrossButton>
                                    <Boxed type="full">
                                        <Container maxWidth="md" >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                whiteText
                                                fullWidth
                                                curved
                                                style={{ padding: "10px", marginBottom: "20px" }}
                                                onClick={props.toggleInviteModal}>
                                                    Return to matches
                                            </Button>
                                        </Container>
                                    </Boxed>
                                </Stack>
                        </Boxed>
                    )}
                </>
            </Modal>
        );
    };

export default InvitesModal;

export interface InvitesModalProps {
    inviteModalOpen: boolean;
    toggleInviteModal: () => void;
    pageNumber: number;
    handlePageInc: () => void;
    resetPage: () => void;
    itemData: ImgObj[];
    currentDate: Date | null;
    currentDateHandler: Dispatch<SetStateAction<Date | null>>;
    nextDate: Date | null;
    nextDateHandler: Dispatch<SetStateAction<Date | null>>;
}

interface ImgObj{
    img: string;
    title: string;
    author: string;
}




