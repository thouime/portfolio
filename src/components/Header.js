import React from "react";
import Toggle from "./Toggle";
import { HashLink } from 'react-router-hash-link';

export default function Header(props) {

    // Click on link. Link is now active. 
    // Other links set to not active
    // so, if id is the same as the one clicked, make it active

    const [navLinks, setNavLinks] = React.useState(createNavLinks());

    function generateNavLink(linkText, id) {
        return {
            text: linkText,
            isActive: false,
            id: id
        }
    }

    function createNavLinks() {
        const navNames = ["Project", "Skills", "Contact"];
        const newNavLinks = [];
        navNames.map((link, id) => {
            return newNavLinks.push(generateNavLink(link, id));
        });
        return newNavLinks;
    }

    const navBar = navLinks.map(link => (
        <NavLink
            key={link.id}
            linkText={link.text}
            isActive={link.isActive}
            setActive={() => setLinkActive(link.id)}
        />
    ));

    function setLinkActive(id) {
        setNavLinks(oldLinks => oldLinks.map(link => {
            return link.id === id ?
            {...link, isActive: true} :
            {...link, isActive: false}
        }))
    }

    return (
        <nav className="nav">
            <p className="nav__author"><HashLink to="#">Tom Ouimet</HashLink></p>
            <ul className='nav__links'>
                <Toggle setSvg={props.setSvg}/>
                {navBar}
            </ul>  
        </nav>
    )
}

function NavLink(props) {
    return (
        <li>
            <HashLink 
                to={`#${props.linkText.toString().toLowerCase()}`}
                className={props.isActive ? 'nav--active' : 'nav--default'}
                onClick={props.setActive}
            >
                {props.linkText}
            </HashLink>
        </li>
    )
}