import Header from "../components/header/Header";
import { Button } from "../components/button/index";
import { ContainerDiv, TextFieldDiv } from "../assets/styles/Common.styles";
import { useState } from "react";
import OtpInput from "react-otp-input-rc-17";
import PageWrapper from "../components/page-wrapper/PageWrapper";

const OTP = (): JSX.Element => {
    const [otp, setOtp] = useState("");
    const handleChange = (value: any) => {
        setOtp(value);
    };
    return (
        <PageWrapper
            headerProps={{
                text: "My OTP is",
            }}
        >
            <ContainerDiv>
                <TextFieldDiv>
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
                </TextFieldDiv>

                <Button color="primary" variant="contained">
                    {" "}
                    Continue
                </Button>
            </ContainerDiv>
        </PageWrapper>
    );
};

export default OTP;
