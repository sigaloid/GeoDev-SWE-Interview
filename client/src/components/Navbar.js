import * as React from "react";
import "./Navbar.css";

function NavigationLink(props) {
    return (
        <div
            id="navlink"
            style={{
                position: "relative",
                width: "fit-content",
                height: "fit-content",
                top: "35px",
                fontSize: "30px",
                transform: "translate(0,-50%)",
                paddingLeft: "20px",
            }}
            onClick={() => props.setRoute(props.title)}
        >
            {props.title}
        </div>
    );
}

function Navbar(props) {
    return (
        <div
            id="navbar-text"
            style={{
                position: "relative",
                width: "100%",
                height: "70px",
                backgroundColor: "#4ab89c",
                display: "flex",
                justifyContent: "left",
            }}
        >
            <NavigationLink setRoute={props.setRoute} title="Home" />
            <NavigationLink setRoute={props.setRoute} title="Task 1" />
        </div>
    );
}
export default Navbar;
