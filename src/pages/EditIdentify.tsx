import { Button } from "../components/button/index";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Boxed from "../components/boxed/Boxed";
import { GENDER_VALUES, ORIENTATION_VALUES } from "../const";

const Identify = (): JSX.Element => {
    const [gender, setGender] = useState("");
    const [orientation, setOrientation] = useState("");

    const handleGenderChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };
    const handleOrientationChange = (event: SelectChangeEvent) => {
        setOrientation(event.target.value as string);
    };
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "I identify as",
                backFunction: () => {}
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
                                onChange={handleGenderChange}>
                                {GENDER_VALUES.map((gender) => {
                                    return (<MenuItem value={gender}>
                                                {gender}
                                            </MenuItem>);
                                })}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="orientation-label">Orientation</InputLabel>
                            <Select
                                labelId="orientation-label"
                                id="orientation-select"
                                value={orientation}
                                label="orientation"
                                onChange={handleOrientationChange}>
                                {ORIENTATION_VALUES.map((orientation) => {
                                    return (<MenuItem value={orientation}>
                                                {orientation}
                                            </MenuItem>);
                                })}
                            </Select>
                        </FormControl>
                        <Button color="primary" variant="contained" whiteText>
                            Continue
                        </Button>
                    </Stack>
                </Boxed>
            </Boxed>
        </Layout>
    );
};

export default Identify;
