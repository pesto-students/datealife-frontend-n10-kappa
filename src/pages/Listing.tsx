import { useState } from "react";
import { Tab as MUITab, Box, Grid, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ChatIcon from "@mui/icons-material/Chat";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { CardInfo, Card, CardMedia, CardActions, Layout } from "../components";
import { OdourlessWrapper, StyledBody } from "../assets/styles/Common.styles";

type Item = {
    label: string;
    value: string;
};

const Listing = (): JSX.Element => {
    // should ne replaced with actual data
    const tabPanelData: any = {
        likes: (
            <Card>
                <CardMedia
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Paella dish"
                    onError={(event: any) => {
                        if (event.target)
                            event.target.src =
                                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                    }}
                    width={200}
                    height={200}
                />
                <CardInfo alignment="bottom" imgHeight={200} imgWidth={200}>
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        Full Name
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        Profession
                    </OdourlessWrapper>
                </CardInfo>
            </Card>
        ),
        matches: (
            <Card>
                <CardMedia
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Paella dish"
                    onError={(event: any) => {
                        if (event.target)
                            event.target.src =
                                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                    }}
                    width={200}
                    height={200}
                />
                <CardInfo alignment="top" imgHeight={200} imgWidth={200}>
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        Full Name
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        Profession
                    </OdourlessWrapper>
                </CardInfo>
                <CardInfo alignment="bottom" imgHeight={200} imgWidth={200} hasIcon>
                    <CardActions width={200}>
                        <OdourlessWrapper component={ConnectWithoutContactIcon} />
                        <OdourlessWrapper component={ChatIcon} />
                    </CardActions>
                </CardInfo>
            </Card>
        ),
        invites: (
            <Card>
                <CardMedia
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Paella dish"
                    onError={(event: any) => {
                        if (event.target)
                            event.target.src =
                                "https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png";
                    }}
                    width={200}
                    height={200}
                />
                <CardInfo alignment="top" imgHeight={200} imgWidth={200}>
                    <OdourlessWrapper variant="subtitle1" component={Typography}>
                        Full Name
                    </OdourlessWrapper>
                    <OdourlessWrapper variant="subtitle2" component={Typography}>
                        Profession
                    </OdourlessWrapper>
                </CardInfo>
                <CardInfo alignment="bottom" imgHeight={200} imgWidth={200} hasIcon>
                    <CardActions width={200}>
                        <OdourlessWrapper component={CloseIcon} />
                        <OdourlessWrapper component={DoneIcon} />
                    </CardActions>
                </CardInfo>
            </Card>
        ),
    };

    const items = [
        {
            label: "Likes",
            value: "likes",
        },
        {
            label: "Matches",
            value: "matches",
        },
        {
            label: "Invites",
            value: "invites",
        },
    ];
    const [value, setValue] = useState("likes");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Likes / Matches",
                backFunction: () => {}
            }}
        >
            <StyledBody>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
                            {items.map(({ label, value }: Item) => (
                                <MUITab label={label} value={value} key={value} />
                            ))}
                        </TabList>
                    </Box>
                    {items.map(({ value }: Item) => (
                        <TabPanel value={value} sx={{ p: "20px 0" }}>
                            <Grid container justifyContent="space-between" alignItems="center" wrap="wrap" spacing={2}>
                                {[1, 2, 3, 4].map((item): any => {
                                    return (
                                        <Grid item xs={6} key={item}>
                                            {tabPanelData[value]}
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </TabPanel>
                    ))}
                </TabContext>
            </StyledBody>
        </Layout>
    );
};

export default Listing;
