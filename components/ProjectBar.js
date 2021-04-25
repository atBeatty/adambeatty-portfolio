// import AnimatedSlider from '../components/AnimatedSlider'
// import AnimatedPlayerSkills from './AnimatedPlayerSkills'
// import Anime, { anime } from 'react-animejs-wrapper'
import { useState, useEffect } from 'react'



export default function ProjectBar({ name }) {

    const [isHovered, handleHoverState] = useState(false)

    const toggleHover = () => {

        return handleHoverState(!isHovered)
    }



    return <div onMouseLeave={toggleHover} onMouseEnter={toggleHover} className={`project-bar ${isHovered ? 'hovered' : ''}`}>
        {name}


        <style jsx>
            {`

            .project-bar.hovered {
                flex-grow: 50;
                font-size: 100px;
                transition: all 1s ease-out;
                padding-top: 25vh;
            }
            .project-bar {
                flex-shrink: 5;
                height: 100vw;
                font-family: Fira Sans;
                font-weight: 100;
            }
            
        `}
        </style>
    </div >


}