import { Stack, Container } from "@mui/material";
import { Boxed, Button, Layout, ChipStack } from "../components";
import { useState } from "react";
import { updateUser } from "../store/reducers/login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { INTERESTS_VALUES } from "../const";
import { SelectedChipsType } from "../components/chip-stack/ChipStack";

const Interests = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [chips, setChips] = useState({});

    const handleChipClick = (selectedChips: SelectedChipsType) => {
        setChips(selectedChips);
    };
    const handleClick = () => {
        const interests = Object.keys(chips);
        dispatch(updateUser({ interests }));
        navigate("/user/picture");
    };
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Interests",
                backFunction: () => {},
            }}
        >
            <Boxed type="full">
                <Container maxWidth="sm">
                    <Stack spacing={5} mt={4}>
                        <ChipStack
                            chips={INTERESTS_VALUES}
                            onChipClick={handleChipClick}
                        />
                        <Button color="primary" variant="contained" fullWidth whiteText onClick={handleClick}>
                            Continue
                        </Button>
                    </Stack>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default Interests;
