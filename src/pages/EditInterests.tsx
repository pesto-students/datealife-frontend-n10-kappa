import { StyledBody } from "../assets/styles/Common.styles";
import ChipStack from "../components/chip-stack/ChipStack";
import Layout from "../components/layout/Layout";
import { Button } from "../components";
import { Stack } from "@mui/material";

const Interests = (): JSX.Element => {
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Interests",
                backFunction: () => {}
            }}
        >
            <StyledBody>
                <Stack spacing={5}>
                    <ChipStack
                        chips={[
                            { label: "Dancing", value: "dancing" },
                            { label: "Singing", value: "singing" },
                            { label: "Reading", value: "reading" },
                            { label: "Playing", value: "playing" },
                            { label: "Trekking", value: "trekking" },
                            { label: "Cricket", value: "cricket" },
                            { label: "Football", value: "football" },
                        ]}
                    />
                    <Button color="primary" variant="contained" fullWidth whiteText>
                        Save
                    </Button>
                </Stack>
            </StyledBody>
        </Layout>
    );
};

export default Interests;
