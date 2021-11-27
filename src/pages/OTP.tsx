import { Button } from "../components/button/index";
import { useState } from "react";
import OtpInput from "react-otp-input-rc-17";
import Layout from "../components/layout/Layout";
import Boxed from "../components/boxed/Boxed";
import { Container } from "@mui/material";

const OTP = (): JSX.Element => {
    const [otp, setOtp] = useState("");
    const handleChange = (value: any) => {
        setOtp(value);
    };
    return (
        <Layout
            headerProps={{
                text: "My OTP is",
                backFunction: () => {}
            }}
        >
            <Boxed type="full">
                <Container maxWidth="md">
                    <Boxed type="textField">
                        <div style={{ width: "max-content", margin: "auto" }}>
                            <OtpInput
                                value={otp}
                                onChange={handleChange}
                                numInputs={4}
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
                                placeholder="0000"
                                separator={<span> &nbsp; &nbsp;</span>}
                                containerStyle={{
                                    width: "maxContent",
                                    margin: "auto",
                                }}
                            />
                        </div>
                    </Boxed>

                    <Button color="primary" variant="contained" fullWidth whiteText>
                        {" "}
                        Continue
                    </Button>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default OTP;
