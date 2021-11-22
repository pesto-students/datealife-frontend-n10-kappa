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
import { Div, ContainerDiv } from "../assets/styles/Common.styles";
import Logo from "../assets/images/logoDateALife.png";
import {ButtonTextColorWhite} from "../assets/styles/Button.styles";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { SendAMessageButton,
    StyledHeadText,
    StyledBodyText,
    StyledSubTitleText,
    ProfileMatchPictureContainer,
    MatchedProfilePictureOne,
    MatchedProfilePictureTwo, CrossButton } from "../assets/styles/Matchmaking.styles";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="down" ref={ref} {...props} />;
  });


const Matchmaking = (): JSX.Element => {
    const [open, setOpen] = useState(true);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
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
                        aria-label="filter icon">
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
                        <StyledFab success={true} aria-label="like" onClick={handleClickOpen}>
                            <FavoriteIcon />
                        </StyledFab>
                    </CardActions>
                </Card>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
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
                            <SendAMessageButton variant="contained" >
                                Send a message
                            </SendAMessageButton>
                            <ButtonTextColorWhite variant="text" >
                                Keep Searching
                            </ButtonTextColorWhite>
                        </ContainerDiv>
                        <CrossButton onClick={handleClose}>
                            <ClearRoundedIcon style={{color: "white"}}/>
                        </CrossButton>
                    </Div>
                </Dialog>
            </div>
        </>
    );
};

export default Matchmaking;
