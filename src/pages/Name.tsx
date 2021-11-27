import TextField from "@mui/material/TextField";
import { Button } from "../components/button/index";
import Layout from "../components/layout/Layout";
import Boxed from "../components/boxed/Boxed";
import { Container } from "@mui/material";

const Name = (): JSX.Element => {
    return (
        <Layout
            headerProps={{
                text: "My name is",
                backFunction: () => {}
            }}>
            <Boxed type="full">
                <Container maxWidth="md">
                    <Boxed type="textField">
                        <TextField
                            required
                            id="standard-required"
                            label="Enter your full name"
                            defaultValue="Max Plank"
                            variant="standard"
                            fullWidth
                        />
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

export default Name;
