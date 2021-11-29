import { Button } from "../components/button/index";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input-rc-17";
import Layout from "../components/layout/Layout";
import Boxed from "../components/boxed/Boxed";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ThirdPartyUser, confirmOtp } from "../auth";
import { fetchUserRequest } from "../store/sagas/user/actions";
import { useNavigate } from "react-router";
import { isLoggedIn } from "../store/reducers/login";

const OTP = (): JSX.Element => {
    const numInputs = 6;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogged = useSelector(isLoggedIn);
    const [otp, setOtp] = useState("");
    const handleChange = (value: any) => {
        setOtp(value);
    };

    useEffect(() => {
        if (isLogged) navigate("/home");
    }, [navigate, isLogged]);

    const handleClick = async () => {
        if (otp.length === numInputs) {
            const user: ThirdPartyUser = await confirmOtp(otp);
            dispatch(fetchUserRequest({ user }));
        }
    };
    return (
        <Layout
            headerProps={{
                text: "My OTP is",
                backFunction: () => {},
            }}
        >
            <Boxed type="full">
                <Container maxWidth="md">
                    <Boxed type="textField">
                        <div style={{ width: "max-content", margin: "auto" }}>
                            <OtpInput
                                value={otp}
                                onChange={handleChange}
                                numInputs={numInputs}
                                inputStyle={{
                                    width: "1.8em",
                                    textAlign: "center",
                                    fontSize: "32px",
                                    fontFamily: "Roboto",
                                    padding: "5px",
                                    border: "none",
                                    borderBottom: "2px solid #a0a0a0",
                                    color: "#474747",
                                }}
                                focusStyle={{
                                    border: "none",
                                    borderBottom: "2px solid purple",
                                    outline: "none",
                                }}
                                isInputNum={true}
                                placeholder="000000"
                                separator={<span> &nbsp; &nbsp;</span>}
                                containerStyle={{
                                    width: "maxContent",
                                    margin: "auto",
                                }}
                            />
                        </div>
                    </Boxed>

                    <Button
                        color="primary"
                        variant="contained"
                        disabled={otp.length !== numInputs}
                        fullWidth
                        whiteText
                        onClick={handleClick}
                    >
                        {" "}
                        Continue
                    </Button>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default OTP;
