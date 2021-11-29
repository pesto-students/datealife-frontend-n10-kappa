import { StyledBody } from "../assets/styles/Common.styles";
import Header from "../components/header/Header";
import Grid from "@mui/material/Grid";
import ImageUploader from "../components/image-uplaoder/ImageUploader";
import uplaodImageToStorage from "../effects/useStorage";
import { useSelector } from "react-redux";
import { getLoggedInUser } from "../store/reducers/login";
import { useState } from "react";

const EditPictures = (): JSX.Element => {
    const [pictures, setPictures] = useState<string[]>([]);
    const user = useSelector(getLoggedInUser);
    const ImageUploaderProps = {
        maxHeight: 300,
        maxWidth: 300,
        height: 200,
        width: 200,
    };

    const onUplaod = async (file: File, index: number) => {
        const newPicture = await uplaodImageToStorage(file, `users/${user?.uid}/profile-${index}`);
        setPictures([...pictures, newPicture]);
    };
    return (
        <>
            <Header
                text="Edit pictures"
                backFunction={() => {
                    alert("Moving back");
                }}
            />
            <StyledBody>
                <Grid container justifyContent="space-between" alignItems="center" wrap="wrap" spacing={2}>
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <Grid item xs={6} key={index}>
                            <ImageUploader canUpload {...ImageUploaderProps} onUpload={(file) => onUplaod(file, index)} />
                        </Grid>
                    ))}
                </Grid>
            </StyledBody>
        </>
    );
};

export default EditPictures;
