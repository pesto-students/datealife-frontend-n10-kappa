import Header from "../components/header/Header";
import TextField from "@mui/material/TextField";
import { Button } from "../components/button/index";
import { ContainerDiv, TextFieldDiv } from "../assets/styles/Common.styles";

const Name = () : JSX.Element  => {
    return (
        <ContainerDiv>
            <Header
                text={"My name is"}
                backFunction={() => {
                    alert("Moving back");
                }}
            />
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

            <Button color="primary" variant="contained"> Continue</Button>
        </ContainerDiv>
    );
};

export default Name;


