import "./Insights.css";
import * as Icons from "react-bootstrap-icons";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Insights(props) {

  const ExpandGallery = () => {
    if (
      document.getElementById("ExtendedGallery").className ==
      "openExtendedGallery"
    ) {
      document.getElementById("ExtendedGallery").className =
        "closeExtendedGallery";
      setTimeout(() => {
        document.getElementById("ExtendedGallery").style.display = "none";
      }, 300);
    } else {
      document.getElementById("ExtendedGallery").className =
        "openExtendedGallery";
      document.getElementById("ExtendedGallery").style.display = "block";
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="AboutUsWrapper Aboutuss">
        <div

          id="TitleContainer"

        >
          <h1
            data-aos="fade-in"
            id="TitleText"
            style={{ marginBlock: "auto", color: props.color }}
          >
            INSIGHTS
          </h1>
        </div>
        

      </div>


    </div>
  );
}

export default Insights;
