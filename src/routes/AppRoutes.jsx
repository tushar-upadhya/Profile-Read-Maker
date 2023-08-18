import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Project from "../pages/Project";
import Profile from "../pages/Profile";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/project" element={<Project />} />

                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;
