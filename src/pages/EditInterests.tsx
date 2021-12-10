import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Stack, Container } from "@mui/material";
import { Boxed, Button, Layout, ChipStack, SelectedChipsType } from "../components";
import { getLoggedInUser, getPreviousPage, updateUser } from "../store/reducers/user";
import { getInterests } from "../store/reducers/interests";
import { ChipItem } from "../components/chip-stack/ChipStack";
import { updateUserRequest } from "../store/sagas/user/actions";
import { fetchInterestListRequest } from "../store/sagas/interests/actions";

const Interests = (): JSX.Element => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(getLoggedInUser);
    const interests = useSelector(getInterests);

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

    useEffect(() => {
        if(!interests || interests.length === 0){
            dispatch(fetchInterestListRequest());
        }
    }, []);

    const handleChipClick = (selectedChips: SelectedChipsType) => {
        setChips(selectedChips);
    };
    const handleClick = () => {
        const interests = Object.keys(chips);
        const userUpdate = { uid: user.uid, interests };
        dispatch(isEditProfile ? updateUserRequest(userUpdate) : updateUser(userUpdate));
        navigate(isEditProfile ? previousPage : "/user/picture");
    };
    const interestList: ChipItem[] = [];
    if(interests){
        interests.forEach((interest) => {
            const chipItem = {} as ChipItem;
            chipItem.value = interest.value;
            chipItem.label = interest.value;
            interestList.push(chipItem);
        });
    }
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
                    {interestList && (
                        <Stack spacing={5} mt={4}>
                        <ChipStack chips={interestList} onChipClick={handleChipClick} userChips={chips} />
                        <Button color="primary" variant="contained" fullWidth whiteText onClick={handleClick}>
                            {buttonText}
                        </Button>
                    </Stack>
                    )}
                </Container>
            </Boxed>
        </Layout>
    );
};

export default Interests;
