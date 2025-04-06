// Home.jsx
import React, { useState } from "react";
import Header from "./old_home_components/Header";
import Sidebar from "./old_home_components/Sidebar";
import HydroponicBackground from "./old_home_components/Background";

function Home() {
    const [navigationText, setNavigationText] = useState("Dashboard");
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="app-container">
            <Header navigationText={navigationText} />
            <Sidebar setNavigationText={setNavigationText} collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className={`main-content`}>
                <HydroponicBackground collapsed={collapsed} />
            </div>
        </div>
    );
}

export default Home;
