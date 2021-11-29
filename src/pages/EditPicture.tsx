import { StyledBody } from "../assets/styles/Common.styles";
import Layout from "../components/layout/Layout";
import { Stack } from "@mui/material";
import { Button, ImageUploader } from "../components";
import { useState } from "react";
import { getLoggedInUser, updateUser } from "../store/reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import uplaodImageToStorage from "../effects/useStorage";
import { createUser } from "../store/sagas/user/actions";

const EditPicture = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const [profilePicture, setProfilePicture] = useState(user?.profilePicture);
    const ImageUploaderProps = {
        maxHeight: 500,
        maxWidth: 500,
        height: 500,
        width: 500,
    };

    const handleClick = () => {
        dispatch(updateUser({ profilePicture }));
        dispatch(createUser({ ...user, profilePicture }));
        navigate("/matchmaking");
    };

    const onUplaod = async (file: File) => {
        const updatePicture = await uplaodImageToStorage(file, `users/${user?.uid}/profile-picture`);
        setProfilePicture(updatePicture);
    };

    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Interests",
                backFunction: () => {},
            }}
        >
            <StyledBody>
                <Stack spacing={5}>
                    <StyledBody>
                        <ImageUploader canUpload {...ImageUploaderProps} onUpload={(file) => onUplaod(file)} />
                    </StyledBody>
                    <Button color="primary" variant="contained" fullWidth whiteText onClick={handleClick}>
                        Done
                    </Button>
                </Stack>
            </StyledBody>
        </Layout>
    );
};

export default EditPicture;
