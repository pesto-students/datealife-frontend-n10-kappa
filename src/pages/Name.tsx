import { Button, Layout, Boxed } from "../components";
import { Container, TextField } from "@mui/material";
import { getLoggedInUser, updateUser } from "../store/reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Name = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const [fullName, setFullName] = useState(user?.fullName);
    const handleClick = () => {
        dispatch(updateUser({ fullName }));
        navigate("/user/dob");
    };
    return (
        <Layout
            headerProps={{
                text: "My name is",
                backFunction: () => {},
            }}
        >
            <Boxed type="full">
                <Container maxWidth="md">
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
                </Container>
            </Boxed>
        </Layout>
    );
};

export default Name;
