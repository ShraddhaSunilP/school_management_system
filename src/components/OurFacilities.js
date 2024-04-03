import React from "react";
import Best_Teachers from "../assets/Best_Teachers.jpg";
import online_classes from "../assets/online_classes.jpg";
import labrotories from "../assets/labrotories.jpg";
import smart_classrooms from "../assets/smart_classrooms.jpg";
import hostel from "../assets/hostel.jpg";
import sports_and_music from "../assets/sports_and_music.jpg";

const OurFacilities = () => {
    return(
        <>
           <div className="container">
                <div className="facility-font">We are providing the best facility</div>
                <div className="row">
                    <div className="facilities">
                        <div>
                            <img src={Best_Teachers} alt="Best_Teachers" className="f-img-hw"/>
                            <div className="img-names">Best Teachers</div>
                        </div>
                        <div>
                            <img src={online_classes} alt="online_classes" className="f-img-hw"/>
                            <div className="img-names">Online Classes</div>
                        </div>
                        <div>
                            <img src={labrotories} alt=" labrotories" className="f-img-hw"/>
                            <div className="img-names">Labrotories</div>
                        </div>
                        <div>
                            <img src={smart_classrooms} alt="smart_classrooms" className="f-img-hw"/>
                            <div className="img-names">Smarts Classrooms</div>
                        </div>
                        <div>
                            <img src={hostel} alt="hostel" className="f-img-hw"/>
                            <div className="img-names">Boys And Girls Hostel</div>
                        </div>
                        <div>
                            <img src={sports_and_music} alt="sports_and_music" className="f-img-hw"/>
                            <div className="img-names">Sports And Music</div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )

}
export default OurFacilities