import DateALifeLogo from "../assets/images/logoDateALife.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Button } from "../components/button/index";
import Boxed from "../components/boxed/Boxed";
import { Container, Stack, Typography } from "@mui/material";
import Logo from "../components/logo/Logo";
import {Link} from "react-router-dom";

const Login = (): JSX.Element => {
    return (
        <Boxed type="backgroundShine">
            <Container maxWidth="md">
                <Stack >
                    <Logo imgUrl={DateALifeLogo} styles={{marginTop: "50px"}} />

                    <Typography variant="h4" color="white" textAlign="center" style={{fontFamily: "DancingScript-Regular, cursive"}} mt={2} mb={5}>Date A Life</Typography>

                    <Typography variant="subtitle1" color="white" textAlign="center" mt={2} mb={2}>
                        By clicking Log In, you agree with our Terms. Learn how we process your data in our <a href="/">Privacy Policy</a>{" "}
                        and Cookies Policy.
                    </Typography>

                    <Boxed type="main">
                        <Stack spacing={3}>
                            <Button variant="contained" startIcon={<GoogleIcon color="warning" />}  whiteBackground>
                                Login with google
                            </Button>

                            <Button variant="contained" startIcon={<FacebookOutlinedIcon sx={{color: "#00B1CD"}} fontSize="large" />} whiteBackground>
                                Login with facebook
                            </Button>

                            <Button variant="contained" startIcon={<LocalPhoneIcon color="secondary" />} whiteBackground>
                                Login with number
                            </Button>

                            <Typography variant="subtitle2" color="white" textAlign="center">
                                Don’t have account?{" "}
                                <strong>
                                    <Link to="/signup" style={{color: "white"}}>Signup</Link>
                                </strong>
                            </Typography>
                        </Stack>
                    </Boxed>
                </Stack>
            </Container>
        </Boxed>
    );
};

export default Login;
