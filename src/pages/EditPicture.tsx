import Layout from "../components/layout/Layout";
import { Stack, Container } from "@mui/material";
import { Boxed, Button, ImageUploader } from "../components";
import { useState } from "react";
import { getLoggedInUser, updateUser } from "../store/reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import uplaodImageToStorage from "../effects/useStorage";
import { createUserRequest } from "../store/sagas/user/actions";

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
        dispatch(createUserRequest({ ...user, profilePicture }));
        navigate("/matchmaking");
    };

    const onUplaod = async (file: File) => {
        const updatePicture = await uplaodImageToStorage(file, `users/${user?.uid}/profile-picture`);
        setProfilePicture(updatePicture);
    };

    return (
        <Layout
            headerProps={{
                text: "Interests",
                backFunction: () => {},
            }}
        >
            <Boxed type="error">
                <Container maxWidth="sm">
                    <Stack spacing={5}>
                        <Container maxWidth="md">
                            <ImageUploader canUpload {...ImageUploaderProps} onUpload={(file) => onUplaod(file)} />
                        </Container>
                        <Button color="primary" variant="contained" fullWidth whiteText onClick={handleClick}>
                            Done
                        </Button>
                    </Stack>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default EditPicture;
