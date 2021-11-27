import Header from "../components/header/Header";
import { Button } from "../components/button/index";
import MuiPhoneNumber from "material-ui-phone-number";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Boxed from "../components/boxed/Boxed";
import { Container } from "@mui/material";

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
            <Boxed type="full">
                <Container maxWidth="md">
                    <>
                         <Boxed type="textField">
                            <MuiPhoneNumber defaultCountry={"in"} onChange={handleChange} fullWidth />
                        </Boxed>
                        <Button color="primary" variant="contained" fullWidth>
                            {" "}
                            Continue
                        </Button>
                    </>
                </Container>
            </Boxed>

        </Layout>
    );
};

export default Number;
