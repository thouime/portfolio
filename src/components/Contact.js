import React from 'react';
import {BriefcaseIcon} from '@heroicons/react/solid';
import { FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";
export default function Default() {
    return (
        <section id="contact" className="card--container">
            <div className="section--header">
                <h1>Contact</h1>
                <BriefcaseIcon className="icon" />
            </div>
            <hr className="header--underline"/>
            <div className="card--style">
                <p>Lets get in touch!</p>
                <ul className="contact--container">
                    <li><a href="mailto:ouimetom@gmail.com"><FaEnvelope className="contact--icon"/></a></li>
                    <li><a href="https://linkedin.com/in/tom-ouimet-128b46244" target="_blank" rel="noreferrer"><FaLinkedin className="contact--icon"/></a></li>
                    <li><a href="https://github.com/thouime" target="_blank" rel="noreferrer"><FaGithub className="contact--icon"/></a></li>
                </ul>
            </div>
        </section>
    )
}