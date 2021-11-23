import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Interests from "./pages/Interests";
import EditPictures from "./pages/EditPictures";
import Name from "./pages/Name";
import DOB from "./pages/DOB";
import IdentifyAs from "./pages/Identify";
import Number from "./pages/Number";
import OTP from "./pages/OTP";
import Listings from "./pages/Listing";
import Learning from "./pages/Learning";
import Matchmaking from "./pages/Matchmaking";
import EditProfile from "./pages/EditProfile";
import Chat from "./pages/Chat";

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/name" element={<Name />} />
            <Route path="/user/identify" element={<IdentifyAs />} />
            <Route path="/signup/number" element={<Number />} />
            <Route path="/signup/otp" element={<OTP />} />
            <Route path="/user/dob" element={<DOB />} />
            <Route path="/user/interests" element={<Interests />} />
            <Route path="/matchmaking" element={<Matchmaking />} />
            <Route path="/user/picture" element={<Home />} />
            <Route path="/user/profile/editProfile" element={<EditProfile />} />
            <Route path="/user/profile/:id/editProfile/editPicture" element={<EditPictures />} />
            <Route path="/user/profile/editProfile/editPicture" element={<EditPictures />} />
            <Route path="/user/profile/:id" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/chatting" element={<Chat />} />
            <Route path="/home" element={<Home />} />
            <Route path="/likes" element={<Listings />} />
        </Routes>
    );
};

export default App;
