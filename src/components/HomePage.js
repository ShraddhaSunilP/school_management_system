import React from "react";
import { useState } from "react";
import { IoIosSchool } from "react-icons/io";
import HomeDetails from "./HomeDetails";
import AboutSchool from "./AboutSchool";
import Admission from "./Admission";
import Curriculum from "./Curriculum";
import ExaminationSystem from "./ExaminationSystem"
import GetInTouch from "./GetInTouch";
import LeadershipTeam from "./LeadershipTeam";
import OurFacilities from "./OurFacilities";
import Syllabus from "./Syllabus"

const HomePage = () => {

    const [loadView, setLoadView] = useState('HomeDetails');

    const handleClick = (e) => {
        setLoadView(e);
        console.log(e);
    }

    return(
        <>
            <div className = "container-fluid">
                <div className="row">
                    <div className="flex-container">
                        <div className="icon-fs"><IoIosSchool /></div>
                        <div className={loadView === "HomeDetails" ? "active": "items large-font"} onClick={()=>{handleClick('HomeDetails')}}>Welcome to Our School</div>
                        <div className={loadView === "AboutSchool" ? "active":"items"} onClick={()=>{handleClick('AboutSchool')}}>About School</div>
                        <div className={loadView === "LeadershipTeam" ? "active":"items"} onClick={()=>{handleClick('LeadershipTeam')}}>LeadershipTeam</div>
                        <div className={loadView === "Admission" ? "active":"items"} onClick={()=>{handleClick('Admission')}}>Admission</div>
                        <div className={loadView === "Curriculum" ? "active":"items"} onClick={()=>{handleClick('Curriculum')}}>Curriculum</div>
                        <div className={loadView === "ExaminationSystem" ? "active":"items"} onClick={()=>{handleClick('ExaminationSystem')}}>ExaminationSystem</div>
                        <div className={loadView === "Syllabus" ? "active":"items"} onClick={()=>{handleClick('Syllabus')}}>Syllabus</div> 
                        <div className={loadView === "OurFacilities" ? "active":"items"} onClick={()=>{handleClick('OurFacilities')}}>OurFacilities</div>
                        <div className={loadView === "GetInTouch" ? "active":"items"}onClick={()=>{handleClick('GetInTouch')}}>GetInTouch</div>
                    </div>
                </div>
                <div className="row">
                    {loadView === "HomeDetails" && <HomeDetails/>}
                    {loadView === "AboutSchool" && <AboutSchool/>}
                    {loadView === "LeadershipTeam" && <LeadershipTeam/>}
                    {loadView === "Admission" && <Admission/>}
                    {loadView === "Curriculum" && <Curriculum/>}
                    {loadView === "ExaminationSystem" && <ExaminationSystem/>}
                    {loadView === "Syllabus" && <Syllabus/>}
                    {loadView === "OurFacilities" && <OurFacilities/>}
                    {loadView === "GetInTouch" && <GetInTouch/>}
               </div>
            </div>
        </>
    )
}
export default HomePage