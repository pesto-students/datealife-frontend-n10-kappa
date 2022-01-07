import { Button, Layout, Boxed } from "../components";
import { Alert, Container, Snackbar, TextField } from "@mui/material";
import { getLoggedInUser, updateUser } from "../store/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Name = (): JSX.Element => {
    const [displayError, setDisplayError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const [fullName, setFullName] = useState(user?.fullName);
    const handleClick = () => {
        if(fullName && fullName !== ""){
            dispatch(updateUser({ fullName }));
            navigate("/user/dob");
            return;
        }
        setDisplayError(true);
    };
    const handleError = (open: any) => {
        setDisplayError(false);
    };
    return (
        <Layout
            headerProps={{
                text: "My name is",
                backFunction: () => {},
            }}
        >
            <Boxed type="full">
                <Container maxWidth="sm">
                    <Boxed type="textField">
                        <TextField
                            required
                            id="standard-required"
                            label="Enter your full name"
                            defaultValue={fullName}
                            variant="standard"
                            fullWidth
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </Boxed>

                    <Button color="primary" variant="contained" fullWidth whiteText onClick={handleClick}>
                        {" "}
                        Continue
                    </Button>

                    <Snackbar
                        open={displayError}
                        autoHideDuration={2000}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        onClose={handleError}
                    >
                        <Alert severity="error" sx={{ width: "100%" }}>
                            Name is required for display
                        </Alert>
                    </Snackbar>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default Name;
