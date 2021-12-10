import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { Container, Stack, TextField } from "@mui/material";

import { Button, Layout, Boxed } from "../components";
import { getLoggedInUser, getPreviousPage, updateUser } from "../store/reducers/user";
import { updateUserRequest } from "../store/sagas/user/actions";

const Interests = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(getLoggedInUser);
    const previousPage = useSelector(getPreviousPage);
    const [bioData, setBioData] = useState("");
    const [profession, setProfession] = useState("");
    const [companyName, setCompanyName] = useState("");
    const isEditProfile = location.pathname.includes("editProfile");
    const buttonText = isEditProfile ? "Save" : "Continue";

    useEffect(() => {
        setProfession(user?.profession || "");
        setBioData(user?.bioData || "");
        setCompanyName(user?.companyName || "");
    }, [user]);

    const handleChange = (
        { target: { value = "" } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        type: string
    ) => {
        if (type === "bioData") {
            setBioData(value);
            return;
        }
        if (type === "profession") {
            setProfession(value);
            return;
        }
        setCompanyName(value);
    };

    const handleClick = () => {
        const userUpdate = { uid: user.uid, bioData, profession, companyName };
        dispatch(isEditProfile ? updateUserRequest(userUpdate) : updateUser(userUpdate));
        navigate(isEditProfile ? previousPage : "/user/interests");
    };

    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Edit about",
                backFunction: () => {},
                backArrow: true,
            }}
        >
            <Boxed type="full">
                <Container maxWidth="sm" style={{ marginTop: "50px", marginBottom: "10" }}>
                    <Stack spacing={5}>
                        <TextField
                            id=""
                            label="Bio"
                            multiline
                            rows={4}
                            variant="outlined"
                            color="primary"
                            value={bioData}
                            onChange={(e) => handleChange(e, "bioData")}
                        />

                        <TextField
                            id=""
                            label="Job Title"
                            variant="standard"
                            color="primary"
                            value={profession}
                            onChange={(e) => handleChange(e, "profession")}
                        />

                        <TextField
                            id=""
                            label="Company name"
                            variant="standard"
                            color="primary"
                            value={companyName}
                            onChange={(e) => handleChange(e, "companyName")}
                        />

                        <Button color="primary" variant="contained" whiteText onClick={handleClick}>
                            {buttonText}
                        </Button>
                    </Stack>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default Interests;
