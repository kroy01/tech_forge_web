
import "./Schedule.css";
import "../GlobalCSS/BaseFloor.css";


import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";



function Schedule(props) {
  const cntntsize = "1.25vmax";

  const scrollToCANSAT = useRef();
  const scrollToSACup = useRef();

  const ExpandPictures = (controls, scrollId) => {
    if (
      document.getElementById(controls).className ==
      "WholePage openExtendedGallery"
    ) {
      scrollToCANSAT.current.scrollIntoView();
      document.getElementById(controls).className =
        "WholePage closeExtendedGallery";
      setTimeout(() => {
        document.getElementById(controls).style.display = "none";
      }, 300);
    } else {
      document.getElementById(controls).className =
        "WholePage openExtendedGallery";
      document.getElementById(controls).style.display = "block";
      scrollId.current.scrollIntoView();
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="ProjectsBody">
      <div className="PageWrapper">
        <div
          id="TitleContainer"
        >
          <h1
            data-aos="fade-in"
            id="TitleText"
            style={{ marginBlock: "auto", color: props.color }}
          >
            SCHEDULE
          </h1>
        </div>

        
      </div>
    </div>
  );
}

export default Schedule;
