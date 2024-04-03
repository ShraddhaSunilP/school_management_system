import React from "react";
import Examlogo from "../assets/Examlogo.jpg"

const ExaminationSystem = () => {
    return (
        <>
            <div className="container examsys-bgcolor">
                <div className="row">
                    <div className="examsys">Lets Discuss Our Examination System</div>
                    <div className="col-md-3">
                        <img src={Examlogo} alt="Examlogo_img" className="exam-img-hw" />
                    </div>
                    <div className="col-md-9">
                        <div className="exam-purpose">
                            <strong>Assessment of Student Learning :</strong> One of the primary purposes of examinations is to assess what students have learned and how well they have mastered the content and skills taught in a particular course or subject. Examinations provide a formal mechanism for evaluating student understanding, knowledge retention, and application of concepts.
                        </div>
                        <div className="exam-purpose">
                            <strong>Feedback for Improvement :</strong> Examinations offer valuable feedback to both students and educators. For students, exam results indicate areas of strength and weakness, helping them identify areas for improvement and guiding their study efforts. Educators use examination results to evaluate the effectiveness of their teaching methods, identify concepts that require further clarification, and make adjustments to instructional strategies.
                        </div>
                        <div className="exam-purpose">
                            <strong> Measurement of Academic Progress :</strong> Examinations serve as a measure of academic progress over time. By comparing performance on exams administered at different points in a student's academic journey (e.g., mid-term exams, final exams, standardized tests), educators and administrators can gauge individual and collective progress toward learning goals and standards.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default ExaminationSystem