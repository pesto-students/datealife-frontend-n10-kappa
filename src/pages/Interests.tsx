import { StyledBody } from "../assets/styles/Common.styles";
import ChipStack, { SelectedChipsType } from "../components/chip-stack/ChipStack";
import Layout from "../components/layout/Layout";
import { Stack } from "@mui/material";
import { Button } from "../components";
import { useState } from "react";
import { updateUser } from "../store/reducers/login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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
                        onChipClick={handleChipClick}
                    />
                    <Button color="primary" variant="contained" fullWidth whiteText onClick={handleClick}>
                        Continue
                    </Button>
                </Stack>
            </StyledBody>
        </Layout>
    );
};

export default Interests;
