import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { ReactElement } from "react";

const App = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editProfile" element={<Home />} />
        </Routes>
    );
};

export default App;
