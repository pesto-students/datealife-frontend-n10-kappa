import "./App.css";
import Home from "pages-1/Home";
import Signup from "pages-1/Signup";
import Login from "pages-1/Login";
import { Routes, Route } from "react-router-dom";
import Interests from "pages-1/Interests";
import EditProfile from "pages-1/EditProfile";
import Name from "pages-1/Name";
import DOB from "pages-1/DOB";
import IdentifyAs from "pages-1/Identify";

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/name" element={<Name />} />
            <Route path="/user/identify" element={<IdentifyAs />} />
            <Route path="/signup/number" element={<Home />} />
            <Route path="/user/dob" element={<DOB />} />
            <Route path="/user/interests" element={<Interests />} />
            <Route path="/user/picture" element={<Home />} />
            <Route path="/user/profile/:id/editProfile" element={<EditProfile />} />
            <Route path="/user/profile/:id" element={<Home />} />
            <Route path="/matchmaking" element={<Home />} />
            <Route path="/learning" element={<Home />} />
            <Route path="/chatting" element={<Home />} />
            <Route path="/likes" element={<Home />} />
        </Routes>
    );
};

export default App;
