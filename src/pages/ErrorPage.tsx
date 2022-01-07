import { Container, Stack, Button } from "@mui/material";
import { Error, Boxed } from "../components/index";
import {Link} from "react-router-dom";

const ErrorPage = (): JSX.Element => {
    return (
        <Boxed type="textField">
            <Container maxWidth="sm">
                <Error errorHeading="404" errorsubText="Page does not exist" />
                <Stack mt={4} pl={4} pr={4}>
                    <Button variant="contained"  component={Link} to="/login" sx={{color: "white", marginBottom: "20px"}}>
                        Go back to Login Page
                    </Button>
                    <Button variant="contained" color="secondary" component={Link} to="/matchmaking" sx={{color: "white"}}>
                        Go to matchmaking page
                    </Button>
                </Stack>
            </Container>
        </Boxed>
    );
};

export default ErrorPage;

