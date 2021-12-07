import { Stack, Container } from "@mui/material";
import { Boxed, Button, Layout, ChipStack } from "../components";
import { useCallback, useState } from "react";
import { updateUser, getLoggedInUser } from "../store/reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { INTERESTS_VALUES } from "../const";
import { SelectedChipsType } from "../components/chip-stack/ChipStack";

const Interests = (): JSX.Element => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const [chips, setChips] = useState({});
    const isEditProfile = location.pathname.includes("editProfile");
    const buttonText = isEditProfile ? "Save" : "Continue";

    const getUserInterests = (interests: string[] = []) => {
        const obj: SelectedChipsType = {};
        interests?.forEach((item) => {
            obj[item] = item;
        });
        return obj;
    };

    getUserInterests();

    const handleChipClick = (selectedChips: SelectedChipsType) => {
        setChips(selectedChips);
    };
    const handleClick = () => {
        const interests = Object.keys(chips);
        dispatch(updateUser({ interests }));
        !isEditProfile && navigate("/user/picture");
    };
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Interests",
            }}
        >
            <Boxed type="full">
                <Container maxWidth="sm">
                    <Stack spacing={5} mt={4}>
                        <ChipStack
                            chips={INTERESTS_VALUES}
                            onChipClick={handleChipClick}
                            userChips={getUserInterests(user.interests)}
                        />
                        <Button color="primary" variant="contained" fullWidth whiteText onClick={handleClick}>
                            {buttonText}
                        </Button>
                    </Stack>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default Interests;
