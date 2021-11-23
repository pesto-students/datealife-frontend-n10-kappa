import Header from "../components/header/Header";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Button } from "../components/button/index";
import { ContainerDiv, TextFieldDiv } from "../assets/styles/Common.styles";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
import Layout from "../components/layout/Layout";

const DOB = (): JSX.Element => {
    const [value, setValue] = useState<Date | null>(new Date());

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    return (
        <Layout
            headerProps={{
                text: "My DOB is",
            }}
        >
            <ContainerDiv>
                <TextFieldDiv>
                    <DatePicker
                        label="Enter your Date of birth"
                        value={value}
                        onChange={handleChange}
                        inputFormat="DD-MM-yyyy"
                        renderInput={(params: TextFieldProps) => <TextField {...params} fullWidth variant="standard" />}
                    />
                </TextFieldDiv>

                <Button color="primary" variant="contained">
                    Continue
                </Button>
            </ContainerDiv>
        </Layout>
    );
};

export default DOB;
