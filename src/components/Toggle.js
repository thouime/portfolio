import React from 'react';
import { setTheme } from '../components/Themes';
import '../css/toggle.css'

export default function Toggle(props) {
    const [toggleClass, setToggleClass] = React.useState('dark');
    let theme = localStorage.getItem('theme');

    React.useEffect(() => {
        if (localStorage.getItem('theme') === 'dark-mode') {
            setToggleClass('dark');
        } else if (localStorage.getItem('theme') === 'light-mode') {
            setToggleClass('light');
        }
    }, [theme])

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'dark-mode') {
            setTheme('light-mode');
            setToggleClass('light');
        } else {
            setTheme('dark-mode');
            setToggleClass('dark');
        }
        props.setSvg();
    }

    return (
        <div className="container--toggle">
            { <input type="checkbox" id="toggle" className="switch toggle--checkbox" onClick={handleOnClick} checked={toggleClass === "light" } readOnly /> }
            <label htmlFor ="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}