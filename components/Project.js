
import { useEffect, useState } from 'react'
import ProjectInfo from './ProjectInfo'
const Project = ({ selectedNumber, projectNumber, whenSelected, whenHovered }) => {

    const handleButtonClick = (e) => whenSelected(e.target.name)
    // const handleHover = (e) => console.log(e)
    const handleHover = (e) => whenHovered(projectNumber)
    // console.log(selectedNumber)

    // function here , then update local state, 



    const projectVisible = selectedNumber === projectNumber;
    // add state that is dependant on projectVisible
    return (
        <div className="project-wrapper">


            <button name={projectNumber} onMouseEnter={handleHover} onClick={handleButtonClick}>{projectNumber}</button>



            <ProjectInfo projectNumber={projectNumber} projectVisible={projectVisible} />




            <style jsx>
                {`
                        button {
                            margin-top: 50px;
                            color: ${projectVisible && "red"};
                            border-bottom: ${projectVisible ? "12px solid red" : "2px solid black"};
                            font-size: ${projectVisible ? "6rem" : "2rem"};
                            font-weight: ${projectVisible ? "900" : "unset"};

                        }
                        button:hover {
                            line-height: ${!projectVisible && "80%"};
                            margin-bottom: ${!projectVisible && "20%"};
                            border-bottom: ${!projectVisible && "4px solid black"};
                        }
                        .project-wrapper {
                            padding-top: ${projectVisible ? '' : '15vh'};
                            
                            text-align: center;
                            flex-grow:${projectVisible ? "8" : "unset"};
                            flex-basis: 10 100 auto;
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

