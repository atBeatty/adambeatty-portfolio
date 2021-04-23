import AnimatedSlider from '../components/AnimatedSlider'
import AnimatedPlayerSkills from './AnimatedPlayerSkills'
import Anime, { anime } from 'react-animejs-wrapper'
import { useState } from 'react'



export default function ProjectBox() {

    const [projectNumber, setProjectNumber] = useState(0)




    const handleOnClick = (e) => {
        setProjectNumber(e.target.innerHTML.split('')[0])
    }

    return <div className="main-wrapper">

        <div onClick={handleOnClick} className="project-bar">1</div>

        <div onClick={handleOnClick} className="project-bar">2
        {projectNumber === '2' ? <article className="project-info">Show me when asd as kd jk s s asdflkj asdllwo owoi aosdoifj ;lkaoo sl sooosos ;lkjsdfa a;lsl s alkskljdf slslsl fowinmf alslf  Clicked.</article> : ""}
        </div>
        <div onClick={handleOnClick} className="project-bar">3
        {projectNumber === '3' ? <article className="project-info">Show me when.</article> : ""}
        </div>
        <div onClick={handleOnClick} className="project-bar">4</div>
        <div onClick={handleOnClick} className="project-bar">5</div>
        <div onClick={handleOnClick} className="project-bar">6</div>



        <style jsx>
            {`
      
            .main-wrapper {

                height: 100vh;
                display: flex;
                justify-content: space-between;
                background:yellow;
            }
            .project-info {
                font-size: 15vh;
                position: absolute;
                height: inherit;
                top: 50px;
                left: 80vh;
                overflow-y: scroll;
                
            }
            .project-bar {
                transition: flex-grow .5s linear;
                height: 90vh;
                text-align:center;
                font-family:Fira Sans;
                font-size: 80vh;
                font-weight: 100;
            }
            .project-bar:not(.project-bar:nth-child(${projectNumber})) {
                flex-shrink: 1;
                text-align: center;
                order: 1;
                background: yellow;
                z-index: 3;
                font-size: 5vh;
            }
            .project-bar:nth-child(${projectNumber}) {
                flex-grow: 12;
                text-align:left;
                position: relative;

            }

      `}
        </style>
    </div>
}