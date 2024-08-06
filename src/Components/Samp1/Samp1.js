import './Samp1.css';

import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import FillerImage from '../FillerImage/FilllerImage';

function Events(props) {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='EventsWrapper'>
            
            <div id='TitleContainer'>
                <h1 data-aos="fade-in" id='TitleText' style={{ marginBlock: 'auto', color: props.color }}>SAMP1</h1>
            </div>
            
        </div>
    );
}

export default Events;