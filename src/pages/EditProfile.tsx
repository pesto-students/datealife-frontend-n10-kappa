import { StyledBody } from "../assets/styles/Common.styles";
import Header from "../components/header/Header";
import Grid from "@mui/material/Grid";
import ImageUploader from "../components/image-uplaoder/ImageUploader";
import PageWrapper from "../components/page-wrapper/PageWrapper";

const EditProfile = (): JSX.Element => {
    const ImageUploaderProps = {
        maxHeight: 300,
        maxWidth: 300,
        height: 200,
        width: 200,
    };
    return (
        <PageWrapper
            hasDrawer
            headerProps={{
                text: "Edit Profile",
            }}
        >
            <StyledBody>
                <Grid container justifyContent="space-between" alignItems="center" wrap="wrap" spacing={2}>
                    <Grid item xs={6}>
                        <ImageUploader canUpload {...ImageUploaderProps} />
                    </Grid>
                    <Grid item xs={6}>
                        <ImageUploader canUpload {...ImageUploaderProps} />
                    </Grid>
                    <Grid item xs={6}>
                        <ImageUploader canUpload {...ImageUploaderProps} />
                    </Grid>
                    <Grid item xs={6}>
                        <ImageUploader canUpload {...ImageUploaderProps} />
                    </Grid>
                    <Grid item xs={6}>
                        <ImageUploader canUpload {...ImageUploaderProps} />
                    </Grid>
                    <Grid item xs={6}>
                        <ImageUploader canUpload {...ImageUploaderProps} />
                    </Grid>
                </Grid>
            </StyledBody>
        </PageWrapper>
    );
};

export default EditProfile;
