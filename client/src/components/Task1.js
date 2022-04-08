import React, { useState, useEffect } from "react";

function Task1() {
    const [speed, setSpeed] = useState("");
    const [direction, setDirection] = useState("");

    useEffect(() => {
        async function getWindSpeed() {
            fetch("http://127.0.0.1:5000/")
                .then((response) => response.text())
                .then((response) => {
                    const data = JSON.parse(response);
                    setDirection(data.direction);
                    setSpeed(data.speed);
                })
                .catch((err) => console.log(err));
        }
        getWindSpeed();
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                position: "relative",
                width: "100vw",
                backgroundColor: "#060e0c",
                zIndex: "-1",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "120px",
                    color: "#eaefee",
                    paddingRight: "20%",
                    paddingLeft: "20%",
                }}
            >
                <h2>
                    Hello and congratulations on making it to this stage! Here
                    is task:
                </h2>
                <h3 style={{}}>
                    The GeoLab is looking to build a website that lets people
                    see the windspeed in Williamsburg, VA. The problem is that
                    students want to see more than just windspeed. They want to
                    know see temperature too. It is your job to modify the code
                    to display the tempterature next to windspeed.
                </h3>
                <div style={{}}>
                    <div>Windspeed in Williamsburg right now: {speed}</div>
                    <div>
                        Wind direction in Williamsburg right now: {direction}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task1;
