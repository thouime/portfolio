import React from "react";
import {BookOpenIcon} from '@heroicons/react/solid';
import HtmlLogo from '../svg/html.svg';
import CssLogo from '../svg/css.svg';
import ReactLogo from '../svg/react.svg';
import JsLogo from '../svg/javascript.svg';
import FigmaLogo from '../svg/figma.svg';
import '../css/skills.css';

export default function Skills() {
    return (
        <section id="skills" className="card--container">
            <div className="section--header">
                <h1>Skills</h1>
                <BookOpenIcon className="icon" />
            </div>
            <hr className="header--underline"/>
            <div className="dome-container">
                <div className="dome">
                    <img className="skill" src={HtmlLogo} alt="Html Logo" />
                    <img className="skill" src={CssLogo} alt="Css Logo" />
                    <img className="skill" src={ReactLogo} alt="React Logo" />
                    <img className="skill" src={JsLogo} alt="Javascript Logo" />
                    <img className="skill" src={FigmaLogo} alt="Figma Logo" />
                </div>
            </div>
            <div className="card--style">
                <p> 
                    Full stack developer utilizing
                    Javascript, React, HTML, CSS, and Figma for designing. 
                    Continuously researching design and modern practices to build
                    essential tools and applications.
                </p>
            </div>
        </section>
    )
}