import {Stack, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from "@mui/material";
import { useState } from "react";
import {Layout, Boxed, Button} from "../components";
import { GENDER_VALUES, ORIENTATION_VALUES } from "../const";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../store/reducers/login";

const Identify = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [gender, setGender] = useState("");
    const [orientation, setOrientation] = useState("");

    const handleGenderChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };
    const handleOrientationChange = (event: SelectChangeEvent) => {
        setOrientation(event.target.value as string);
    };
    const handleClick = () => {
        dispatch(updateUser({ gender, orientation }));
        navigate("/user/interests");
    };
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "I identify as",
                backFunction: () => {},
            }}
        >
            <Boxed type="full">
                <Boxed type="textField2">
                    <Stack spacing={5}>
                        <FormControl fullWidth>
                            <InputLabel id="gender-label">Gender</InputLabel>
                            <Select
                                labelId="gender-label"
                                id="gender-select"
                                value={gender}
                                label="Gender"
                                onChange={handleGenderChange}
                            >
                                {GENDER_VALUES.map((gender) => (
                                    <MenuItem value={gender.toLowerCase()} key={gender}>
                                        {gender}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="orientation-label">Orientation</InputLabel>
                            <Select
                                labelId="orientation-label"
                                id="orientation-select"
                                value={orientation}
                                label="orientation"
                                onChange={handleOrientationChange}
                            >
                                {ORIENTATION_VALUES.map((orientation) => (
                                    <MenuItem value={orientation.toLowerCase()} key={orientation}>
                                        {orientation}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button color="primary" variant="contained" whiteText onClick={handleClick}>
                            Continue
                        </Button>
                    </Stack>
                </Boxed>
            </Boxed>
        </Layout>
    );
};

export default Identify;
