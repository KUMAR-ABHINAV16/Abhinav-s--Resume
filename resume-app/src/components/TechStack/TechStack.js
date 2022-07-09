import React from "react";
import './TechStack.css'
import c from "../../images/c.png";
import js from "../../images/js.png";
import css from "../../images/css.png";
import cpp from "../../images/cpp.png";
import react from "../../images/react.png";
import html from "../../images/html.svg";
import python from "../../images/python.jpg";
import java from "../../images/java.png";
import TechStackIconContainer from "./TechStackIconCon/TechStackIconContainer";

export default function TechStack(){

// why making 2 const array ?? 
    const techstackData = [
        {
            iconName: "C",
            iconImage: c,
            iconAltProperty: "reactImage",
        },
         {
            iconImage: "JavaScript",
            iconImage: js,
            iconAltProperty: "jsImage",
         },
        {
            iconName: "CSS",
            iconImage: css,
            iconAltProperty: "cssImage",
          },
          {
            iconName: "Java",
            iconImage: java,
            iconAltProperty: "javaImage",
          },
        ];
        const techstackData2 = [
            {
              iconName: "C++",
              iconImage: cpp,
              iconAltProperty: "cppImage",
            },
            {
              iconName: "HTML",
              iconImage: html,
              iconAltProperty: "htmlImage",
            },
            {
              iconName: "React",
              iconImage: react,
              iconAltProperty: "reactImage",
            },
            {
              iconName: "Python",
              iconImage: python,
              iconAltProperty: "pythonImage",
            },
          ];
    return(
        <div className="techstack_container">
            <p className="techstack_title"><u>Tech stack</u></p>
            <div className="techstack_icon_container">
                {techstackData.map((item,index) => {
                    return(
                        <TechStackIconContainer 
                        image={item.iconImage}
                        altProperty={item.iconAltProperty}
                        name={item.iconName}
                        />
                    );
                })}
            </div>
            <div className="techstack_icon_container">
        {techstackData2.map((item, index) => {
          return (
            <TechStackIconContainer
              image={item.iconImage}
              altProperty={item.iconAltProperty}
              name={item.iconName}
            />
          );
        })}
      </div>
        </div>
    );
}

//export default TechStack;