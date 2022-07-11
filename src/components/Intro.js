// Intro Page about myself
// Short introduction that helps me stand out
import React from "react";

export default function Intro() {
    const svgDir = require.context('../../src/svg');

    return (
        <section className="intro">
            <div className="intro--container">
                <div className="intro--description">
                    <h1><span className="intro--underline">Hello</span>, I'm Tom.</h1>
                    <h2>Full Stack Developer building simple, elegant websites.</h2>
                    <div className="intro--buttons">
                        <button><a href="#project">My Work</a></button>
                        <button><a href="#contact">Contact Me</a></button>
                    </div>
                </div>
                <img
                    alt="vector art of person programming"
                    src={svgDir(`./programming.svg`)} 
                />
            </div>
        </section>
    )
}