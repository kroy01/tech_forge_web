import './Timeline.css';

import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


function Timeline(props) {
    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, []);

    return (
        <div className=''>
            <div className = 'WholePage' id='TitleContainer' style={{ height: '100vh' }}>

                <h1 data-aos="fade-right" id='TitleText' style={{ marginInline: 'auto', color: props.darkmode ? 'white' : '#252525' }}>SAMP2</h1>
            </div>
            
        </div>
    )

}
export default Timeline;