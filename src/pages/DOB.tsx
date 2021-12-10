import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Container, TextField, TextFieldProps, Snackbar, Alert } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import { getAge } from "../utils";
import { Button, Layout, Boxed } from "../components";
import { updateUser } from "../store/reducers/user";

const DOB = (): JSX.Element => {
    const [displayError, setDisplayError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dob, setDob] = useState<Date | null>(moment().toDate());

    const handleChange = (newValue: any) => {
        setDob(newValue?.toDate());
    };

    const handleClick = () => {
        const age = getAge(dob?.getTime() as number);

        if (age >= 18) {
            dispatch(updateUser({ dob: dob?.getTime(), age: age.toString() }));
            navigate("/user/identify");
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
                text: "My DOB is",
                backFunction: () => {},
                backArrow: true,
            }}
        >
            <Boxed type="full">
                <Container maxWidth="md">
                    <Boxed type="textField">
                        <DatePicker
                            label="Enter your Date of birth"
                            value={dob}
                            onChange={handleChange}
                            inputFormat="DD-MM-yyyy"
                            renderInput={(params: TextFieldProps) => <TextField {...params} fullWidth variant="standard" />}
                        />
                    </Boxed>
                    <Button color="primary" variant="contained" fullWidth whiteText onClick={handleClick}>
                        Continue
                    </Button>
                    <Snackbar
                        open={displayError}
                        autoHideDuration={2000}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        onClose={handleError}
                    >
                        <Alert severity="error" sx={{ width: "100%" }}>
                            You need to be above 18 to signup
                        </Alert>
                    </Snackbar>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default DOB;
