import Header from "../components/header/Header";
import { Button } from "../components/button/index";
import { ContainerDiv, TextFieldDiv } from "../assets/styles/Common.styles";
import MuiPhoneNumber from "material-ui-phone-number";
import { useState } from "react";
import Layout from "../components/layout/Layout";

const Number = (): JSX.Element => {
    const [number, setNumber] = useState("");
    const handleChange = (value: any) => {
        setNumber(value);
    };
    return (
        <Layout
            headerProps={{
                text: "My number is",
                backFunction: () => {}
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
        </Layout>
    );
};

export default Number;
