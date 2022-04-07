import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";

function Navigator(props) {
    const route = props.route;
    switch (route) {
        case "Oranges":
            break;
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
