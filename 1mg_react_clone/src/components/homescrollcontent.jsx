import { useEffect, useState } from "react";
import HomePageImg1 from "../assets/HomePageImg1.png";
import HomePageImg2 from "../assets/HomePageImg2.png";
import HomePageImg3 from "../assets/HomePageImg3.png";
import HomePageImg4 from "../assets/HomePageImg4.png";
import HomePageImg5 from "../assets/HomePageImg5.png";
import HomePageImg6 from "../assets/HomePageImg6.png";
import HomePageImg7 from "../assets/HomePageImg7.png";
import "../styles/homepagescroll.css";

export function HomeScrollContent() {
    const [scrollContent, setscrollContent] = useState(0);
    const [timeoutID, setTimeoutID] = useState(null);

    useEffect(() => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        
        const tID = setTimeout(() => {
            setscrollContent((prev) => (prev === 5 ? 0 : prev + 1));
        }, 2000);

        setTimeoutID(tID);

        return () => clearTimeout(tID);
    }, [scrollContent]);

    const images = [
        HomePageImg1,
        HomePageImg2,
        HomePageImg3,
        HomePageImg4,
        HomePageImg5,
        HomePageImg6
    ];

    const handleDotClick = (index) => {
        setscrollContent(index);
    };

    return (
        <div id="HomePageScrollStyle">
            <div className="scrollableContent">
                <img src={images[scrollContent]} className="imgscrollhome" alt={`Slide ${scrollContent + 1}`} />
                <div className="dotsContainer">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${scrollContent === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>

            <div className="staticContent">
                <img src={HomePageImg7} className="imgstatichome" alt="Static Content" />
            </div>
        </div>
    );
}
