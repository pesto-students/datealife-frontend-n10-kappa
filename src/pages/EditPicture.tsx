import { Stack, Container } from "@mui/material";
import { Boxed, Button, ImageUploader, Layout } from "../components";
import { useEffect, useState } from "react";
import { getLoggedInUser, updateUser } from "../store/reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import uplaodImageToStorage from "../effects/useStorage";
import { createUserRequest } from "../store/sagas/user/actions";

const EditPicture = (): JSX.Element => {
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const [profilePicture, setProfilePicture] = useState("");
    const ImageUploaderProps = {
        maxHeight: 500,
        maxWidth: 500,
        height: 500,
        width: 500,
    };

    useEffect(() => {
        setProfilePicture(user.profilePicture || "");
    }, [user.profilePicture]);

    const handleClick = () => {
        dispatch(updateUser({ profilePicture }));
        dispatch(createUserRequest({ ...user, profilePicture }));
        navigate("/matchmaking");
    };

    const onUplaod = async (file: File) => {
        const updatePicture = await uplaodImageToStorage(file, `users/${user?.uid}/profile-picture`);
        setProfilePicture(updatePicture);
        setDisabled(false);
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
                            <ImageUploader
                                canUpload
                                {...ImageUploaderProps}
                                onUpload={(file) => onUplaod(file)}
                                src={profilePicture}
                            />
                        </Container>
                        <Button color="primary" disabled={disabled} variant="contained" fullWidth whiteText onClick={handleClick}>
                            Done
                        </Button>
                    </Stack>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default EditPicture;
