import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeDetails from "./HomeDetails";
import AboutSchool from "./AboutSchool";
import Admission from "./Admission";
import Curriculum from "./Curriculum";
import ExaminitionSystem from "./ExaminationSystem";
import GetInTouch from "./GetInTouch";
import LeadershipTeam from "./LeadershipTeam";
import OurFacilities from "./OurFacilities";
import Syllabus from "./Syllabus";
import HomePage from "./HomePage";

 const AllRoutes = ()=> {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}></Route>
                    <Route exact path="/homedetails" element={<HomeDetails/>}></Route>
                    <Route exact path="/aboutschool" element={<AboutSchool/>}></Route>
                    <Route exact path="/admission" element={<Admission/>}></Route>
                    <Route exact path="/curriculum" element={<Curriculum/>}></Route>
                    <Route exact path="/examsys" element={<ExaminitionSystem/>}></Route>
                    <Route exact path="./getintouch" element={<GetInTouch/>}></Route>
                    <Route exact path="/teams" element={<LeadershipTeam/>}></Route>
                    <Route exact path="/facilities" element={<OurFacilities/>}></Route>
                    <Route exact path="/syllabus" element={<Syllabus/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default AllRoutes