// import AnimatedSlider from '../components/AnimatedSlider'
// import AnimatedPlayerSkills from './AnimatedPlayerSkills'
// import Anime, { anime } from 'react-animejs-wrapper'
import { useState, useEffect } from 'react'



export default function ProjectBar({ proj, name }) {

    const [isHovered, handleHoverState] = useState(false)

    const toggleHover = () => {

        return handleHoverState(!isHovered)
    }


    // const handleMouseEnter = (e) => {
    //     // e.target.classList.add(".mouse-enter")
    //     console.log(e.target.classList)
    // }

    function handleOnClick(event) {
        // onChildClick(event.target.proj); // pass any argument to the callback

    }
    return <div onMouseLeave={toggleHover} onMouseEnter={toggleHover} className={`project-bar ${isHovered ? 'hovered' : ''}`}>




        {/* <button
            className={isHovered ? 'pulse animated' : ''}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
        </button> */}

        {/* <button name={proj} className={isHovered ? "hovered" : ""} onClick={handleOnClick}>{proj}</button> */}

        <style jsx>
            {`

            .project-bar .hovered {
                flex-grow: 500;
                font-size: 200px;
                transition: all 1s ease-out;
                padding-top: 25vh;
            }
            .project-bar {
                flex-shrink: 5;
                border: 1px solid blue;
                height: 100vw;
                font-family: Fira Sans;
                font-weight: 100;
            }
            
        `}
        </style>
    </div >


}