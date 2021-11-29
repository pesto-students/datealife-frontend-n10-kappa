import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Interests from "./pages/Interests";
import EditInterests from "./pages/EditInterests";
import EditPictures from "./pages/EditPictures";
import Name from "./pages/Name";
import DOB from "./pages/DOB";
import IdentifyAs from "./pages/Identify";
import EditIdentifyAs from "./pages/EditIdentify";
import ErrorPage from "./pages/ErrorPage";
import Number from "./pages/Number";
import OTP from "./pages/OTP";
import Listings from "./pages/Listing";
import Learning from "./pages/Learning";
import Matchmaking from "./pages/Matchmaking";
import EditProfile from "./pages/EditProfile";
import Chat from "./pages/Chat";
import EditAboutUs from "./pages/EditAboutUs";
import EditPicture from "./pages/EditPicture";

const routes: RoutesType[] = [
    {
        pathname: "/signup",
        component: Signup,
    },
    {
        pathname: "/login",
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
