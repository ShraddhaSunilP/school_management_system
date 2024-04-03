import React from "react";
import carriculum_img1 from "../assets/carriculum_img1.jpg";
import carriculum_img2 from "../assets/carriculum_img2.jpg";
import carriculum_img3 from "../assets/carriculum_img3.jpg";

const Curriculum = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="t-color">Our Upcoming Batches</div>
                    </div>
                    <div className="col-md-4">
                        <div className="t-color">Please Hurry Up</div>
                    </div>
                    <div className="col-md-4">
                        <div className="t-color">Only Few Seats Are Available</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img src={carriculum_img1} alt="carriculum_img1" className="c-img-hw" />
                    </div>
                    <div className="col-md-9">
                        <div className="all-batch">5th Standard Batches</div>
                        <div className="f-standard">
                            "Join our 5th upcoming batch for an immersive learning experience tailored to your goals!"
                            "Secure your spot in our 5th cohort and embark on a journey of knowledge and growth."
                            "Don't miss out on the opportunity to be part of our dynamic 5th batch – enroll now and unlock your potential!
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                    <div className="all-batch">10th Standard Batches</div>
                        <div className="f-standard">
                            "Join our 5th upcoming batch for an immersive learning experience tailored to your goals!"
                            "Secure your spot in our 5th cohort and embark on a journey of knowledge and growth."
                            "Don't miss out on the opportunity to be part of our dynamic 5th batch – enroll now and unlock your potential!
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img src={carriculum_img2} alt="carriculum_img2" className="c-img-hw" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img src={carriculum_img3} alt="carriculum_img3" className="c-img-hw" />
                    </div>
                    <div className="col-md-9">
                    <div className="all-batch">12th Standard Batches</div>
                        <div className="f-standard">
                            "Join our 5th upcoming batch for an immersive learning experience tailored to your goals!"
                            "Secure your spot in our 5th cohort and embark on a journey of knowledge and growth."
                            "Don't miss out on the opportunity to be part of our dynamic 5th batch – enroll now and unlock your potential!
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}
export default Curriculum