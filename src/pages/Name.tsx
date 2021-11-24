import Header from "../components/header/Header";
import TextField from "@mui/material/TextField";
import { Button } from "../components/button/index";
import { ContainerDiv, TextFieldDiv } from "../assets/styles/Common.styles";
import Layout from "../components/layout/Layout";

const Name = (): JSX.Element => {
    return (
        <Layout
            headerProps={{
                text: "My name is",
            }}
        >
            <ContainerDiv>
                <TextFieldDiv>
                    <TextField
                        required
                        id="standard-required"
                        label="Enter your full name"
                        defaultValue="Max Plank"
                        variant="standard"
                        fullWidth
                    />
                </TextFieldDiv>

                <Button color="primary" variant="contained">
                    {" "}
                    Continue
                </Button>
            </ContainerDiv>
        </Layout>
    );
};

export default Name;
