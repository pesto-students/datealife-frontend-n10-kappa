import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Stack, Container } from "@mui/material";
import { Boxed, Button, ImageUploader, Layout } from "../components";
import { getLoggedInUser, getPreviousPage, updateUser } from "../store/reducers/user";
import { uplaodImageToStorage } from "../utils";
import { createUserRequest } from "../store/sagas/user/actions";

const EditPicture = (): JSX.Element => {
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const previousPage = useSelector(getPreviousPage);
    const [profilePicture, setProfilePicture] = useState("");
    const isEditProfile = location.pathname.includes("editProfile");
    const buttonText = isEditProfile ? "Save" : "Done";
    const ImageUploaderProps = {
        maxHeight: 500,
        maxWidth: 500,
        height: 500,
        width: 500,
    };

    useEffect(() => {
        if (user.profilePicture) {
            setProfilePicture(user.profilePicture);
            setDisabled(false);
        }
    }, [user.profilePicture]);

    const handleClick = () => {
        const userUpdate = { uid: user.uid, profilePicture };
        dispatch(createUserRequest({ ...user, ...userUpdate }));
        navigate(isEditProfile ? previousPage : "/matchmaking");
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
                backArrow: true,
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
                            {buttonText}
                        </Button>
                    </Stack>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default EditPicture;
