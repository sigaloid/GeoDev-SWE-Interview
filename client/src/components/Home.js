import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

export default function Home(props) {
    const globe = useRef(null);

    useLayoutEffect(() => {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Orthographic();
        chart.panBehavior = "rotateLongLat";
        chart.deltaLatitude = -20;
        chart.padding(20, 20, 20, 20);

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;
        // polygonSeries.include = ["US", "UA", "RU", "CN"];

        const countries = [
            [
                "NZ",
                "BG",
                "MZ",
                "SM",
                "TT",
                "BS",
                "GA",
                "HT",
                "QA",
                "TF",
                "GA",
                "OM",
                "VI",
                "KM",
                "PS",
                "PG",
                "MY",
                "PT",
                "PH",
                "AG",
                "GG",
                "NP",
                "SV",
                "CN",
                "GN",
                "MQ",
                "MK",
                "FI",
                "DZ",
                "SK",
                "BR",
                "BD",
                "TD",
                "ES",
                "RE",
                "CF",
                "ZM",
                "UA",
                "KN",
                "ER",
                "MS",
                "TW",
                "GQ",
                "KZ",
                "LU",
                "MG",
                "PW",
                "BT",
                "IQ",
                "JO",
                "YT",
                "LS",
                "PE",
                "FR",
                "AL",
                "KM",
                "ES",
                "TK",
                "NA",
                "PK",
                "RE",
                "PA",
                "VU",
                "ET",
                "GE",
                "SG",
                "BM",
                "CI",
                "MW",
                "GT",
                "IN",
                "MK",
                "BI",
                "WS",
                "KY",
                "TW",
                "NU",
                "IO",
                "LK",
                "PA",
                "NF",
                "CU",
                "KM",
            ],
            [
                "HU",
                "CI",
                "GQ",
                "JP",
                "GI",
                "CX",
                "ES",
                "SY",
                "CI",
                "CR",
                "VN",
                "ZW",
                "AL",
                "SN",
                "NR",
                "GB",
                "LK",
                "LK",
                "LI",
                "VE",
                "VI",
                "CH",
                "PK",
                "CD",
                "IQ",
                "NG",
                "MF",
                "ZM",
                "ML",
                "SZ",
                "KP",
                "LA",
                "SH",
                "SC",
                "SX",
                "GQ",
                "SB",
                "SI",
                "PA",
                "AL",
                "PT",
                "RW",
                "IL",
                "ET",
                "EC",
                "LT",
                "RO",
                "GH",
                "AM",
                "LR",
                "NZ",
                "BW",
                "SO",
                "FI",
                "IM",
                "MT",
                "BS",
                "AM",
                "PS",
                "FJ",
                "LU",
                "NC",
                "BD",
                "HT",
                "TC",
                "PM",
                "HU",
                "UY",
                "NF",
                "SJ",
                "MU",
                "NP",
                "CG",
                "MN",
                "IE",
                "GT",
                "GM",
                "BR",
                "DJ",
                "RW",
                "EE",
                "UG",
                "TG",
            ],
        ];
        // var result = polygonSeries.data.filter((obj) => {
        //     obj.color = "#fff";
        //     console.log(obj);
        //     return obj;
        // });

        // for (const code in countries[0]) {
        //     polygonSeries.getPolygonById(code).color = "#fff";
        // }
        // for (const code in countries[1]) {
        //     polygonSeries.getPolygonById(code).color = "#0f0fff";
        // }

        var black_filled_polygon_ids = countries[0];
        var pink_filled_polygon_ids = countries[1];
        var data = [];

        black_filled_polygon_ids.map(function (id) {
            data.push({
                id: id,
                color: "#4ab89c",
            });
        });
        pink_filled_polygon_ids.map(function (id) {
            data.push({
                id: id,
                color: "#3e7365",
            });
        });

        polygonSeries.data = data;
        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.propertyFields.fill = "color";

        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#081411");

        polygonTemplate.stroke = am4core.color("#286354");
        polygonTemplate.strokeWidth = 0.5;
        polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        polygonTemplate.url = "https://www.datadrum.com/main.php?package={id}";
        polygonTemplate.urlTarget = "_blank";

        var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
        graticuleSeries.mapLines.template.line.stroke =
            am4core.color("#ffffff");
        graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
        graticuleSeries.fitExtent = false;

        chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
        chart.backgroundSeries.mapPolygons.template.polygon.fill =
            am4core.color("#ffffff");

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#282b63").brighten(-0.5);

        let animation;
        setTimeout(function () {
            animation = chart.animate(
                { property: "deltaLongitude", to: 100000 },
                20000000,
            );
        }, 3000);

        chart.seriesContainer.events.on("down", function () {
            //  animation.stop();
        });

        globe.current = chart;

        return () => {
            chart.dispose();
        };
    }, []);

    return (
        <div style={{ backgroundColor: "#060e0c", height: "100vh" }}>
            <div
                style={{
                    position: "relative",
                    width: "fit-content",
                    height: "fit-content",
                    top: "75px",
                    left: "50%",
                    fontSize: "30px",
                    transform: "translate(-50%,-50%)",
                    color: "#eaefee",
                }}
            >
                Geolab Interview
            </div>
            <div>
                <div
                    id="chartdiv"
                    style={{
                        width: "100%",
                        position: "relative",
                        top: "100px",
                        height: "500px",
                        borderRadius: "400px",
                        backgroundColor: "transparent",
                        display: "block",
                        overflow: "hidden",
                        left: "50%",
                        transform: "translate(-50%)",
                    }}
                ></div>
            </div>
        </div>
    );
}
