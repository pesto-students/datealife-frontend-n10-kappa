import Typography from "@mui/material/Typography";
import { CardInfo, Card, CardMedia, Layout } from "../components";
import { OdourlessWrapper, StyledBody } from "../assets/styles/Common.styles";
import { Fab, IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const Learning = (): JSX.Element => {
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Learning",
                backFunction: () => {}
            }}
        >
            <StyledBody>
                <IconButton sx={{
                            position: "fixed",
                            right: "20px",
                            top: "8px",
                            zIndex: "9999",
                    }} >
                    <FilterAltOutlinedIcon />
                </IconButton>

                {[1, 2, 3, 4].map((item): any => {
                    return (
                        <Card sx={{ p: "10px 0" }} key={item}>
                            <CardMedia
                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                                alt="Paella dish"
                                onError={(event: any) => {
                                    if (event.target)
                                        event.target.src =
                                            "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                                }}
                                width={500}
                                height={300}
                            />
                            <CardInfo alignment="bottom" imgHeight={300} imgWidth={500}>
                                <OdourlessWrapper variant="h5" component={Typography}>
                                    Full Name
                                </OdourlessWrapper>
                                <OdourlessWrapper variant="subtitle1" component={Typography}>
                                    Profession
                                </OdourlessWrapper>
                            </CardInfo>
                        </Card>
                    );
                })}
            </StyledBody>
        </Layout>
    );
};

export default Learning;
