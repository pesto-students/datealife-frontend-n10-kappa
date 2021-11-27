import { Button } from "../components/button/index";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Boxed from "../components/boxed/Boxed";

const Identify = (): JSX.Element => {
    const [gender, setGender] = useState("");
    const [orientation, setOrientation] = useState("");

    const handlerGenderChange = (event: SelectChangeEvent) => {
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
                                onChange={handlerGenderChange}
                                disabled
                            >
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Rather not say"}>Rather not say</MenuItem>
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
                                <MenuItem value={"Straight"}>Straight</MenuItem>
                                <MenuItem value={"Gay/Lesbian"}>Gay/Lesbian</MenuItem>
                                <MenuItem value={"Bisexual"}>Bisexual</MenuItem>
                                <MenuItem value={"Pansexual"}>Pansexual</MenuItem>
                                <MenuItem value={"Transexual"}>Transexual</MenuItem>
                            </Select>
                        </FormControl>
                        <Button color="primary" variant="contained" whiteText>
                            Save
                        </Button>
                    </Stack>
                </Boxed>
            </Boxed>
        </Layout>
    );
};

export default Identify;
