

import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Samp3.css';


function Sponsers(props) {
    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, []);
    return (
        <div className='SponsorsWrapper'>
            <div className='WholePage' id='TitleContainer' style={{ height: '100vh' }}>
                <h1 data-aos="fade-right" id='TitleText' style={{ marginBlock: 'auto', color: props.color, fontColor : "white" }}>SAMP3</h1>
            </div>
            
        </div>
    )
}

export default Sponsers;