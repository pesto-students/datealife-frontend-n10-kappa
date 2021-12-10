import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import { Stack, Container } from "@mui/material";

import { INTERESTS_VALUES } from "../const";
import { Boxed, Button, Layout, ChipStack, SelectedChipsType } from "../components";
import { getLoggedInUser, getPreviousPage, updateUser } from "../store/reducers/user";
import { updateUserRequest } from "../store/sagas/user/actions";

const Interests = (): JSX.Element => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const previousPage = useSelector(getPreviousPage);
    const [chips, setChips] = useState({});
    const isEditProfile = location.pathname.includes("editProfile");
    const buttonText = isEditProfile ? "Save" : "Continue";

    useEffect(() => {
        const obj: SelectedChipsType = {};
        user.interests?.forEach((item) => {
            obj[item] = item;
        });
        setChips(obj);
    }, [user.interests]);

    const handleChipClick = (selectedChips: SelectedChipsType) => {
        setChips(selectedChips);
    };
    const handleClick = () => {
        const interests = Object.keys(chips);
        const userUpdate = { uid: user.uid, interests };
        dispatch(isEditProfile ? updateUserRequest(userUpdate) : updateUser(userUpdate));
        navigate(isEditProfile ? previousPage : "/user/picture");
    };
    return (
        <Layout
            hasDrawer={isEditProfile}
            headerProps={{
                text: "Interests",
                backArrow: true
            }}
        >
            <Boxed type="full">
                <Container maxWidth="xs">
                    <Stack spacing={5} mt={4}>
                        <ChipStack chips={INTERESTS_VALUES} onChipClick={handleChipClick} userChips={chips} />
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
