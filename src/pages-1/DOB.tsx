import Header from "../components/header/Header";
import TextField from "@mui/material/TextField";
import { Button } from "../components/button/index";
import { ContainerDiv, TextFieldDiv } from "../assets/styles/Common.styles";
import DatePicker from "@mui/lab/DatePicker";
import {useState} from "react";

const Login = () : JSX.Element  => {
    const [value, setValue] = useState<Date | null>(null);
    return (
        <ContainerDiv>
            <Header
                text={"My DOB is"}
                backFunction={() => {
                    alert("Moving back");
                }}
            />
            <TextFieldDiv>
                <DatePicker
                    label="Enter your Date of birth"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                />
            </TextFieldDiv>

            <Button color="primary" variant="contained"> Continue</Button>
        </ContainerDiv>
    );
};

export default Login;


