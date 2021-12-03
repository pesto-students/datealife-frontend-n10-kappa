import ChipStack from "../components/chip-stack/ChipStack";
import { Stack, Container } from "@mui/material";
import { Boxed, Layout, Button } from "../components";
import { INTERESTS_VALUES } from "../const";

const Interests = (): JSX.Element => {
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Interests",
                backFunction: () => {}
            }}
        >
            <Boxed type="error">
                <Container maxWidth="md">
                    <Stack spacing={5}  mt={4}>
                        <ChipStack
                            chips={INTERESTS_VALUES}
                        />
                        <Button color="primary" variant="contained" fullWidth whiteText>
                            Save
                        </Button>
                    </Stack>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default Interests;
