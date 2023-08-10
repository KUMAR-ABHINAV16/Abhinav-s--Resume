import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";

export default function Projects() {
    const projectData = [
        {
        image: 
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
        title: "MOVIE BOX",
        sentences: [
            "-> Domain: Web Application|Technologies used: Javascript, React JS , CSS, HTML. ",
                "-> Developed an application to watch movies by their Genre.",
                "-> Developed features for the application and enabled authorization to enhance customer experience ",
                "-> LIVE LINK :-   https://abhinav-movies-box.netlify.app/  "
                
        ],
        // link: "https://www.google.co.in/",
        },

       
        {
            image:
              "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
            title: "News Website",
            sentences: [
                "-> Technologies used : Html, CSS, Javascript, React Js, Bootstrap.  ",
                "-> API is used for fetch the news from News API. ",
                "-> A full-stack web application that displays the latest †news articles from various tech website",
                "-> Search option is also there for detailed news ",
            ],
            // link: "https://www.google.co.in/",
          },
    ];

    return (
        <div>
            <p className="projects_title"><u>Projects</u></p>
            <div className="projects_box_container">
                {projectData.map((value, index)=> (
                    <ProjectBox
                    title = {value.title}
                    image={value.image}
                    sentences={value.sentences}
                    // link={value.link}
                    />
                ))}
            </div>
            <p className="last"><u>DESIGNED BY KR. ABHINAV</u></p>
        </div>
    );
}