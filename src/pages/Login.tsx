import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Container, Stack, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { thirdPartySignin, ThirdPartyUser } from "../auth";
import { Boxed, Button, Logo } from "../components";
import { getIsLoggedIn, getIsExistingUser, updateUser } from "../store/reducers/user";
import { fetchUserRequest } from "../store/sagas/user/actions";
import DateALifeLogo from "../assets/images/logoDateALife.png";
import { Navigate } from "react-router";

const Login = (): JSX.Element => {
    const { authType } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isExistingUser = useSelector(getIsExistingUser);
    const handleClick = async (type: string) => {
        if (type === "number") {
            navigate("/signup/number");
            return;
        }
        const user: ThirdPartyUser = await thirdPartySignin(type, isExistingUser);
        if (!isExistingUser) dispatch(updateUser(user));
        user.uid && dispatch(fetchUserRequest({ userId: user.uid }));
    };

    useEffect(() => {
        if (isLoggedIn) {
            const url = isExistingUser ? "/matchmaking" : "/user/name";
            navigate(url);
        }
    }, [navigate, isExistingUser, isLoggedIn]);

    return authType === "signup" || authType === "login" ? (
        <Boxed type="backgroundShine">
            <Container maxWidth="sm">
                <Stack>
                    <Logo imgUrl={DateALifeLogo} styles={{ marginTop: "50px" }} />

                    <Typography
                        variant="h4"
                        color="white"
                        textAlign="center"
                        style={{ fontFamily: "DancingScript-Regular, cursive" }}
                        mt={2}
                        mb={5}
                    >
                        Date A Life
                    </Typography>

                    <Typography variant="subtitle1" color="white" textAlign="center" mt={2} mb={2}>
                        By clicking Log In, you agree with our Terms. Learn how we process your data in our{" "}
                        <a href="/">Privacy Policy</a> and Cookies Policy.
                    </Typography>
                    <Boxed type="main">
                        <Stack spacing={3}>
                            <Button
                                variant="contained"
                                startIcon={<GoogleIcon color="warning" />}
                                whiteBackground={true}
                                onClick={() => handleClick("google")}
                            >
                                {authType} with google
                            </Button>

                            <Button
                                variant="contained"
                                startIcon={<FacebookOutlinedIcon sx={{ color: "#00B1CD" }} fontSize="large" />}
                                whiteBackground={true}
                                onClick={() => handleClick("fb")}
                            >
                                {authType} with facebook
                            </Button>

                            <Button
                                variant="contained"
                                startIcon={<LocalPhoneIcon color="secondary" />}
                                whiteBackground={true}
                                onClick={() => handleClick("number")}
                            >
                                {authType} with number
                            </Button>

                            <Typography variant="subtitle2" color="white" textAlign="center">
                                Don’t have account?{" "}
                                <strong>
                                    <Link to={authType === "login" ? "/signup" : "/login"} style={{ color: "white" }}>
                                        {authType === "login" ? "Signup" : "Login"}
                                    </Link>
                                </strong>
                            </Typography>
                        </Stack>
                    </Boxed>
                </Stack>
            </Container>
        </Boxed>
    ) : (
        <Navigate to="/error" replace={true} />
    );
};

export default Login;
