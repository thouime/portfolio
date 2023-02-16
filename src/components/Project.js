import React from "react";
import '../css/App.css';
import { projects } from "../data/projectData";
import { CodeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function Project() {

    const svgDir = require.context('../../src/svg');

    const projectList = projects.map((project, index) => 
        <Link 
            to={project.react ? project.link : `../../projects/${project.link}`} 
            target="_blank"
            key={(`../images/${project.image}`)}
        >
        {/* // <a
        //     href={`../../projects/${project.link}`}
        //     rel="noreferrer"
        //     key={project.image}
        //     target="_blank"
        // > */}
            <div className="project--card">
                <div className={`project--front ${index%2 !== 0 && "reverse"}`}>
                    <img
                        className="project--img"
                        alt="gallery"
                        src={require(`../images/${project.image}`).default}
                        key={(`../images/${project.image}`)}
                    />
                    <img 
                        className="project--svg"
                        alt="man writing on large document"
                        src={svgDir(`./${project.svg}`)}
                        key={svgDir(`./${project.svg}`)}
                    />
                </div>
                <div className={`project--back ${index%2 === 0 && "reverse"}`}>
                    <div className="project--skills">
                        { project.skills.map((skill => 
                            <img
                                alt="svg"
                                src={svgDir(`./${skill + ".svg"}`)}
                                key={svgDir(`./${skill + ".svg"}`)}
                            />
                        ))}
                    </div>
                    <div className="project--text">
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        {/* </a> */}
        </Link>
    );

    return (
        <section id="project">
            <div className="section--header">
                <h1 >My Work</h1>
                <CodeIcon className="icon" />
            </div>
            <hr className="header--underline"/>
            <div className="project--container">
                {projectList}
            </div>
        </section>
    )
}