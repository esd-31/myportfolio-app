import React from "react";
import "../sass/projects.scss";
import dev3D from "../images/dev_3D.png";
import { useState } from "react";
import oxvaGoals from "../project/FE_OXVA_ONE.png";
import relxMerch from "../project/FE_RELX_ONE.png";
import groceryBud from "../project/FE_GB_ONE.png";
import learnScience from "../project/FE_SL_ONE.png";
import {BsGithub} from "react-icons/bs";
import { Link } from "react-router-dom";


const Projects = () => {

    const [displayProjects, setDisplayProjects] = useState([
        {
            id: 1,
            src: oxvaGoals,
            title: "FRONT-END OXVA GOALS"
        },
        {
            id: 2,
            src: relxMerch,
            title: "FRONT-END RELX MERCH",
        },
        {
            id: 3,
            src: groceryBud,
            title: "FRONT END GROCERY BUD",
        },
        {
            id: 4,
            src: learnScience,
            title: "FRONT END REVIEWER SCIENCE",
        }
    ])
    return (
        <div className="projects-container">
            <div className="dev-logo">
                <img src={dev3D} data-aos="fade-right" />
                <div className="projects-content" data-aos="zoom-in-up">
                    <h1>MY PROJECTS</h1>
                    {displayProjects.map((displayProject, index) => {
                        return (
                            <div className="my-projects" key={index}>
                                <img src={displayProject.src} />
                                <strong>{displayProject.title}</strong>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="view-github-container">
                <div className="view-github-content">
                    <div className="github-icon">
                    <Link to="https://github.com/esd-31?tab=repositories">View on my GITHBUB</Link>
                    <BsGithub />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Projects;