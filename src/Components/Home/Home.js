import './Home.css';

import LineChart from '../LineChart/LineChart.jsx';

import FillerImage from '../FillerImage/FilllerImage.jsx';
import React, { useState, useEffect } from "react";








function Home(props) {
    const cntntsize = "1.45vmax";
    const eventswidth = "30vh";
    const [fillerImageData, setFillerImageData] = useState([]);



    return (
        <>
            <div className='HomeWrapper' style={{ color: props.color }}>

                <h1 id='TitleText' style={{ marginTop: "50px", marginBottom: "50px" }}>TECH FORGE</h1>

                <div style={{ display: "flex", justifyContent: "space-around", maxHeight: "600px", marginBottom: "20px" }}>
                    <LineChart />

                </div>
                <div style={{ display: "flex", justifyContent: "space-around", maxHeight: "600px", flexDirection: "row" }}>
                    <FillerImage
                        style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", border: "2px solid #008080", borderRadius: "10px", background: `linear-gradient(#008080, #00808090)`, gap: "20px", alignItems: "center" }}
                        x ={{fontSize : "60px", margin : "0"}}
                        head="O"
                        hs={2}
                        val="97%"
                        alt="sample"
                    />

                    {/* <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}> */}
                    <FillerImage
                        style={{ display: "flex", flexDirection: "row", border: "2px solid #008080", borderRadius: "10px", alignItems: "center", gap: "20px", background: `linear-gradient(#008080, #00808090)` }}
                        x ={{fontSize : "60px", margin : "0"}}
                        head="H"
                        hs="F"
                        val={0.095}
                        alt="sample"
                    />
                    <FillerImage
                        style={{ display: "flex", flexDirection: "row", border: "2px solid #008080", borderRadius: "10px", alignItems: "center", gap: "20px", background: `linear-gradient(#008080, #00808090)` }}
                        x ={{fontSize : "60px", margin : "0"}}
                        head="L"
                        hs="F"
                        val={0.054}
                        alt="sample"
                    />
                    {/* </div> */}
                    <FillerImage
                        style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", border: "2px solid #008080", borderRadius: "10px", background: `linear-gradient(#008080, #00808090)`, gap: "20px", alignItems:"center" }}
                        x ={{fontSize : "40px", margin : "0"}}
                        head="Ratio"
                        hs="lf/hf"
                        val={0.57}
                        alt="sample"
                    />
                    <FillerImage
                        style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", border: "2px solid #008080", borderRadius: "10px", background: `linear-gradient(#008080, #00808090)`, gap: "20px", alignItems:"center" }}
                        x ={{fontSize : "40px", margin : "0"}}
                        head="Stress Level : "
                        hs=""
                        val="Low"
                        alt="sample"
                    />
                </div>

                <div style={{ height: "20px" }}></div>

            </div>
        </>
    );
}

export default Home;