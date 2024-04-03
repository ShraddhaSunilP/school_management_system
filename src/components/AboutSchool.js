import React from "react";

import Imfrastructure_img from "../assets/Imfrastructure_img.jpg";
import Ourresult_img from "../assets/Ourresult_img.jpg";

const AboutSchool = () => {
    return(
        <>
           <div className="container">
                <div className="row">
                    <div className="size-a-s">About Our School</div>
                    <div className="f-aboutinfo">Welcome to Symbosis, where education meets innovation. Founded on principles of academic excellence, character development, and community engagement, our institution is committed to nurturing the next generation of leaders and innovators.At Symbosis, we believe in providing a holistic learning experience that goes beyond textbooks, fostering creativity, critical thinking, and collaboration among our students. </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-align">
                            <img src={Imfrastructure_img} alt="infrastructure_img" className="img-size"/>
                        </div>
                        <div className="info-align f-aboutinfo">Our campus features well-maintained sports fields and courts, providing students with ample opportunities for physical activity and healthy competition. Additionally, we offer dedicated spaces for artistic expression, including art studios,</div>
                    </div>
                    <div className="col-md-6">
                       <div className="img-align">
                            <img src={Ourresult_img} alt="bestresult_img" className="img-size"/>
                       </div>
                       <div className="info-align f-aboutinfo">At Symbosys we take pride in our tradition of academic excellence, reflected in our students' outstanding results year after year. Our commitment to fostering a culture of learning and achievement has consistently propelled our students to achieve remarkable success in various examinations and competitions.</div>
                    </div>
                </div>

           </div>
        </>
    )

}
export default AboutSchool
