import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";

export default function Projects() {
    const projectData = [
        {
        image: 
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
        title: "Metaverse",
        sentences: [
            "-> 3D Artificial World ",
                "-> Similar to real world",
                "-> 5G technology ",
                "-> 360 degree view ",
        ],
        // link: "https://www.google.co.in/",
        },

       
        {
            image:
              "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
            title: "Metaverse",
            sentences: [
                "-> Vitually meeting with people  ",
                "-> NFT ",
                "-> Security of data",
                "-> 5G technology ",
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