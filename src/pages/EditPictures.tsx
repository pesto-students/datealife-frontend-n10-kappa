import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import { Button, Layout, ImageUploader } from "../components";
import uplaodImageToStorage from "../effects/useStorage";
import { getLoggedInUser } from "../store/reducers/login";
import { StyledBody } from "../assets/styles/Common.styles";
import { updateUserRequest } from "../store/sagas/user/actions";

const EditPictures = (): JSX.Element => {
    const dispatch = useDispatch();
    const { uid, pictures } = useSelector(getLoggedInUser);
    const [localPics, setLocalPics] = useState<string[]>(pictures || []);
    const ImageUploaderProps = {
        maxHeight: 300,
        maxWidth: 300,
        height: 200,
        width: 200,
    };

    const onUplaod = async (file: File, index: number) => {
        const newPicture = await uplaodImageToStorage(file, `users/${uid}/profile-${index}`);
        const pics = [...localPics];
        pics[index] = newPicture;
        setLocalPics(pics);
    };

    const removeFile = (currentIndex: number) => {
        const pics = localPics.filter((item, index) => index !== currentIndex);
        setLocalPics(pics);
    };

    const handleClick = () => {
        dispatch(updateUserRequest({ uid, pictures: localPics }));
    };

    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Edit Pictures",
                color: "secondary",
                backFunction: () => {},
            }}
        >
            <StyledBody>
                <Grid container justifyContent="space-between" alignItems="center" wrap="wrap" spacing={2}>
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                        <Grid item xs={6} key={index}>
                            <ImageUploader
                                canUpload
                                {...ImageUploaderProps}
                                onUpload={(file) => onUplaod(file, index)}
                                removeFile={() => removeFile(index)}
                                src={localPics[index]}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Button color="primary" variant="contained" fullWidth whiteText onClick={handleClick}>
                    Done
                </Button>
            </StyledBody>
        </Layout>
    );
};

export default EditPictures;
