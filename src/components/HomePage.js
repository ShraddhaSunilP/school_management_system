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
                        <div className="items large-font" onClick={()=>{handleClick('HomeDetails')}}>Welcome to Our School</div>
                        <div className="items" onClick={()=>{handleClick('AboutSchool')}}>About School</div>
                        <div className="items" onClick={()=>{handleClick('LeadershipTeam')}}>LeadershipTeam</div>
                        <div className="items" onClick={()=>{handleClick('Admission')}}>Admission</div>
                        <div className="items" onClick={()=>{handleClick('Curriculum')}}>Curriculum</div>
                        <div className="items" onClick={()=>{handleClick('ExaminationSystem')}}>ExaminationSystem</div>
                        <div className="items" onClick={()=>{handleClick('Syllabus')}}>Syllabus</div> 
                        <div className="items" onClick={()=>{handleClick('OurFacilities')}}>OurFacilities</div>
                        <div className="items"onClick={()=>{handleClick('GetInTouch')}}>GetInTouch</div>
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