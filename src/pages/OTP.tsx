import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Container } from "@mui/material";
import OtpInput from "react-otp-input-rc-17";

import { ThirdPartyUser, confirmOtp } from "../auth";
import { Button, Boxed, Layout } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getIsExistingUser, getIsLoggedIn, updateUser } from "../store/reducers/user";
import { fetchUserRequest } from "../store/sagas/user/actions";

const OTP = (): JSX.Element => {
    const numInputs = 6;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isExistingUser = useSelector(getIsExistingUser);
    const [otp, setOtp] = useState("");
    const handleChange = (value: any) => {
        setOtp(value);
    };

    useEffect(() => {
        if (isLoggedIn) {
            const url = isExistingUser ? "/matchmaking" : "/user/name";
            navigate(url);
        }
    }, [navigate, isExistingUser, isLoggedIn]);

    const handleClick = async () => {
        if (otp.length === numInputs) {
            const user: ThirdPartyUser = await confirmOtp(otp);
            if (!isExistingUser) dispatch(updateUser(user));
            user.uid && dispatch(fetchUserRequest({ userId: user.uid }));
        }
    };
    return (
        <Layout
            headerProps={{
                text: "My OTP is",
                backFunction: () => {},
                backArrow: true,
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
                                    width: "1.2em",
                                    textAlign: "center",
                                    fontSize: "22px",
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
                        Continue
                    </Button>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default OTP;
