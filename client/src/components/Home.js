import React, { useLayoutEffect, useRef, useState } from "react";
import Globe from "./Globe";
export default function Home(props) {
    return (
        <div style={{ backgroundColor: "#060e0c", height: "100vh" }}>
            <div
                style={{
                    position: "relative",
                    width: "fit-content",
                    height: "fit-content",
                    top: "145px",
                    left: "50%",
                    fontSize: "30px",
                    transform: "translate(-50%,-50%)",
                    color: "#eaefee",
                }}
            >
                Geolab SWE Interview
            </div>
            <div>
                <Globe />
            </div>
        </div>
    );
}
