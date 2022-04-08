import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Task1 from "./components/Task1";

function Navigator(props) {
    const route = props.route;
    switch (route) {
        case "Task 1":
            return <Task1 />;
        default:
            return <Home />;
    }
}
function App() {
    const [route, setRoute] = useState("Home");
    return (
        <div className="App">
            <Navbar setRoute={setRoute}></Navbar>
            <Navigator route={route}></Navigator>
        </div>
    );
}

export default App;
