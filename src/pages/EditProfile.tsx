import { StyledBody } from "../assets/styles/Common.styles";
import Header from "../components/header/Header";
import Grid from "@mui/material/Grid";
import ImageUploader from "../components/image-uplaoder/ImageUploader";

const EditProfile = (): JSX.Element => {
    return (
        <>
            <Header
                text="Interests"
                backFunction={() => {
                    alert("Moving back");
                }}
            />
            <StyledBody>
                <Grid container justifyContent="space-around" alignItems="center" wrap="wrap" spacing={2}>
                    <Grid item xs="auto">
                        <ImageUploader canUpload />
                    </Grid>
                    <Grid item xs="auto">
                        <ImageUploader canUpload />
                    </Grid>
                    <Grid item xs="auto">
                        <ImageUploader canUpload />
                    </Grid>
                    <Grid item xs="auto">
                        <ImageUploader canUpload />
                    </Grid>
                    <Grid item xs="auto">
                        <ImageUploader canUpload />
                    </Grid>
                    <Grid item xs="auto">
                        <ImageUploader canUpload />
                    </Grid>
                </Grid>
            </StyledBody>
        </>
    );
};

export default EditProfile;
