import React from "react";
import adm_img from "../assets/adm_img.jpg";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Admission = () => {
    return (
        <>
            <div className="container bg-color">
                <div className="row">
                    <div className="col-md-6">
                        <img src={adm_img} alt="adm_img" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="adm-2024">2024</div>
                            <div className="adm-school">SCHOOL</div>
                            <div className="adm-admission">ADMISSION</div>
                            <div className="registration">Now Open For Registrations!</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 email">
                                <span>Email: symbosys.pune@gmail.com</span>
                                <span><CgMail /></span>
                            </div>
                            <div className="col-md-6 phone">
                                <span>Phone: +999 234 342 </span>
                                <span><FaPhoneVolume /></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}
export default Admission