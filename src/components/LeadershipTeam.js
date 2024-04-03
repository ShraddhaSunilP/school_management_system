import React from "react";
import director_img from "../assets/director_img.jpg";
import principal_img from "../assets/principal_img.jpg";
import voicerincipal_img from "../assets/voicerincipal_img.jpg";

const LeadershipTeam = () => {
    return(
        <>
            <div className="container">  
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="Meet-team">Meet The <strong>team</strong></div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <img src={director_img} alt="director_img" className="img-h-w"/>
                            <div className="team-info">OUR DIRECTOR</div>
                            <div className="team-info">Mr. JSON FELLER</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img src={principal_img} alt="principal_img" className="img-h-w"/>
                            <div className="team-info">OUR PRINCIPAL</div>
                            <div className="team-info">Mr. MARIA EADES</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img src={voicerincipal_img} alt="voiceprincipal_img" className="img-h-w"/>
                            <div className="team-info">OUR VOICEPRINCIPAL</div>
                            <div className="team-info">Mr. MICHELLE CHU</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default LeadershipTeam