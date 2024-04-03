import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const GetInTouch = () => {
    return (
        <>
            <div className="container getintouch-bgcolor">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="contact-f-c">CONTACT</div>
                        <p className="color-g-i-t">GET IN TOUCH</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="row ">
                            <div className="color-d-bshy">DON'T BE SHY</div>
                            <div>
                                <div className="data-color">Feel free to get in touch with me. I am</div>
                                <div className="data-color">always open to discussing new projects.</div>
                                <div className="data-color">Creative ideas or opportunities to be part</div>
                                <div className="data-color">of your visions.</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="icon-clr"><CgMail /></div>
                            <div className="data-color">Mail me</div>
                            <div className="data-color">abc.school@gmail.com</div>
                        </div>
                        <div className="row"></div>
                            <div className="icon-clr"><FaPhoneVolume /></div>
                            <div className="data-color">Call me</div>
                            <div className="data-color">+91 9988652103</div>
                    </div>
                    <div className="col-md-8">
                        <form className="margin-left">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="email" className="form-control input-w" placeholder="Enter your Name" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="password" className="form-control input-w" placeholder="Enter your valid email address" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">Check me out</label>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control input-w" rows="3" placeholder="Enter you message"></textarea>
                            </div>
                            <button type="submit" className="butn-color">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
export default GetInTouch