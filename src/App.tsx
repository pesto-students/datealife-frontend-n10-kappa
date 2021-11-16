import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editProfile" element={<Home />} />
        </Routes>
    );
};

export default App;
