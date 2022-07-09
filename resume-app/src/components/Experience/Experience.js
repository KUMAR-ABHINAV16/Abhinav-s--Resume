import React from "react";
import"./Experience.css";
import html from "../../images/html.svg";
import react from "../../images/react.svg";
import js from "../../images/js.png";
import firebase from "../../images/firebase.jpg";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function Experience() {
     const statements = [
        "1. 3-4 months deep learn",
        "2. Got certificate on c++ ",
        "3. Solved  all assignments  ",
        "4. some projects ",
        
     ];
     const statements2 = [
      "1. Master C++ Programming",
      "2. Got certificate on c++ ",
      "3. 3-4 months deep learn  ",
      "4. some projects ",
      
   ];

     const iconImages = [react,js,html];

     return (
        <div className="experience_container">
            <p className="experience_title"><u>Experience</u></p>
            <div className="experience_card_container">
            <ExperienceCard
          companyName="NPTEL"
          designation="Learner"
          statements={statements}  // we are calling javascript
          iconImages={iconImages}
        />
         <ExperienceCard
          companyName="Udemy"
          designation="SDE"
          statements={statements2}
          iconImages={iconImages}
        />
       
            </div>
        </div>
     );
}