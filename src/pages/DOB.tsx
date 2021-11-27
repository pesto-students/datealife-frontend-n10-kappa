import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Button } from "../components/button/index";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Boxed from "../components/boxed/Boxed";
import { Container } from "@mui/material";

const DOB = (): JSX.Element => {
    const [value, setValue] = useState<Date | null>(new Date());

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    return (
        <Layout
            headerProps={{
                text: "My DOB is",
                backFunction: () => {}
            }}
        >
            <Boxed type="full">
                <Container maxWidth="md">
                    <Boxed type="textField">
                        <DatePicker
                            label="Enter your Date of birth"
                            value={value}
                            onChange={handleChange}
                            inputFormat="DD-MM-yyyy"
                            renderInput={(params: TextFieldProps) => <TextField {...params} fullWidth variant="standard" />}
                        />
                    </Boxed>
                    <Button color="primary" variant="contained" fullWidth>
                        Continue
                    </Button>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default DOB;
