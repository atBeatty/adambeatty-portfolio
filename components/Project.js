
import { useEffect, useState } from 'react'
import ProjectInfo from './ProjectInfo'
const Project = ({ selectedNumber, projectNumber, whenSelected, whenHovered }) => {

    const handleButtonClick = (e) => whenSelected(e.target.name)





    const projectVisible = selectedNumber === projectNumber;
    // add state that is dependant on projectVisible
    return (
        <div onMouseOver={() => whenHovered(projectNumber)} className="project-wrapper">


            <button name={projectNumber} onClick={handleButtonClick}>{projectNumber}</button>



            <ProjectInfo projectNumber={projectNumber} projectVisible={projectVisible} />




            <style jsx>
                {`
                        button {
                            margin-top: 50px;
                            color: ${projectVisible && "red"};
                            border-bottom: ${projectVisible ? "12px solid red" : "2px solid black"};
                            font-size: ${projectVisible ? "6rem" : "4rem"};
                            font-weight: ${projectVisible ? "900" : "unset"};

                        }
                        .project-wrapper > * {
                            transition: flex-order 1.5s linear;
                        }
                       
                        .project-wrapper {
                            padding-top: ${projectVisible ? '' : '15vh'};
                            
                            text-align: center;
                            flex-grow:${projectVisible ? "8" : "unset"};
                            flex-shrink:${projectVisible ? "8" : "unset"};
                            // flex-basis: 10 100 auto;
                            transition: flex .25s ease-out;
                            order:${projectVisible ? "1" : "unset"};
                        }

            `}
            </style>

        </div>
    )
}

export default Project

// CLICK

