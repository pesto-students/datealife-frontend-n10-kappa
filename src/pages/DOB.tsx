import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Button } from "../components/button/index";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Boxed from "../components/boxed/Boxed";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/reducers/login";
import moment, { Moment } from "moment";

const DOB = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dob, setDob] = useState<Date | null>(moment().toDate());

    const handleChange = (newValue: any) => {
        setDob(newValue?.toDate());
    };

    const handleClick = () => {
        dispatch(updateUser({ dob: dob?.getTime() }));
        navigate("/user/identify");
    };
    return (
        <Layout
            headerProps={{
                text: "My DOB is",
                backFunction: () => {},
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
                </Container>
            </Boxed>
        </Layout>
    );
};

export default DOB;
