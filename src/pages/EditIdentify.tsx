import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { Stack, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from "@mui/material";
import { Button, Boxed, Layout } from "../components";
import { GENDER_VALUES, ORIENTATION_VALUES } from "../const";
import { getLoggedInUser, getPreviousPage, updateUser } from "../store/reducers/user";
import { updateUserRequest } from "../store/sagas/user/actions";

const EditIdentify = (): JSX.Element => {
    const location = useLocation();
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [gender, setGender] = useState("");
    const [orientation, setOrientation] = useState("");
    const user = useSelector(getLoggedInUser);
    const previousPage = useSelector(getPreviousPage);
    const isEditProfile = location.pathname.includes("editProfile");
    const buttonText = isEditProfile ? "Save" : "Continue";

    const handleGenderChange = (event: SelectChangeEvent) => {
        const updatedGender = event.target.value as string;
        setGender(updatedGender);
        updatedGender && orientation && setDisabled(false);
    };
    const handleOrientationChange = (event: SelectChangeEvent) => {
        const updatedOrientation = event.target.value as string;
        setOrientation(updatedOrientation);
        gender && updatedOrientation && setDisabled(false);
    };
    const handleClick = () => {
        const userUpdate = { uid: user.uid, gender, orientation };
        dispatch(isEditProfile ? updateUserRequest(userUpdate) : updateUser(userUpdate));
        navigate(isEditProfile ? previousPage : "/user/interests");
    };
    return (
        <Layout
            hasDrawer={isEditProfile}
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
                                label="Orientation"
                                onChange={handleOrientationChange}
                            >
                                {ORIENTATION_VALUES.map((orientation) => (
                                    <MenuItem value={orientation.toLowerCase()} key={orientation}>
                                        {orientation}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button color="primary" disabled={disabled} variant="contained" whiteText onClick={handleClick}>
                            {buttonText}
                        </Button>
                    </Stack>
                </Boxed>
            </Boxed>
        </Layout>
    );
};

export default EditIdentify;
