import Header from "../components/header/Header";
import { Button } from "../components/button/index";
import { ContainerDiv, TextFieldDiv } from "../assets/styles/Common.styles";
import MuiPhoneNumber from "material-ui-phone-number";
import { useState } from "react";
import PageWrapper from "../components/page-wrapper/PageWrapper";

const Number = (): JSX.Element => {
    const [number, setNumber] = useState("");
    const handleChange = (value: any) => {
        setNumber(value);
    };
    return (
        <PageWrapper
            headerProps={{
                text: "My number is",
            }}
        >
            <ContainerDiv>
                <TextFieldDiv>
                    <MuiPhoneNumber defaultCountry={"in"} onChange={handleChange} fullWidth />
                </TextFieldDiv>

                <Button color="primary" variant="contained">
                    {" "}
                    Continue
                </Button>
            </ContainerDiv>
        </PageWrapper>
    );
};

export default Number;
