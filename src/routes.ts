import {
    Chat,
    DOB,
    EditAboutUs,
    EditIdentifyAs,
    EditInterests,
    EditPicture,
    EditPictures,
    EditProfile,
    ErrorPage,
    IdentifyAs,
    Interests,
    Learning,
    Listings,
    Login,
    Matchmaking,
    Name,
    Number,
    OTP,
    SignUp,
} from "./pages";

const routes: RoutesType[] = [
    {
        pathname: "/:authType",
        component: Login,
    },
    {
        pathname: "/user/name",
        component: Name,
    },
    {
        pathname: "/user/identify",
        component: IdentifyAs,
    },
    {
        pathname: "/signup/number",
        component: Number,
    },
    {
        pathname: "/signup/otp",
        component: OTP,
    },
    {
        pathname: "/user/dob",
        component: DOB,
    },
    {
        pathname: "/user/interests",
        component: Interests,
    },
    {
        pathname: "/matchmaking",
        component: Matchmaking,
    },
    {
        pathname: "/user/dob",
        component: DOB,
    },
    {
        pathname: "/user/picture",
        component: EditPicture,
    },
    {
        pathname: "/user/profile/editProfile",
        component: EditProfile,
    },
    {
        pathname: "/user/profile/:id/editProfile/editPicture",
        component: EditPictures,
    },
    {
        pathname: "/user/profile/editProfile/editPicture",
        component: EditPictures,
    },
    {
        pathname: "/learning",
        component: Learning,
    },
    {
        pathname: "/chatting",
        component: Chat,
    },
    {
        pathname: "/chatting/:chatId",
        component: Chat,
    },
    {
        pathname: "/home",
        component: Matchmaking,
    },
    {
        pathname: "/likes",
        component: Listings,
    },
    {
        pathname: "/user/profile/editProfile/editAbout",
        component: EditAboutUs,
    },
    {
        pathname: "/user/profile/editProfile/editInterests",
        component: EditInterests,
    },
    {
        pathname: "/user/profile/editProfile/editIdentify",
        component: EditIdentifyAs,
    },
    {
        pathname: "*",
        component: ErrorPage,
    },
];

type RoutesType = {
    pathname: string;
    component: any;
};

export default routes;
