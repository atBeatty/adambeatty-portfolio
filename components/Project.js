import ProjectDataStore from '../lib/ProjectDataStore.json'

import { useEffect, useState } from 'react'
import ProjectInfo from './ProjectInfo'
const Project = ({ selectedNumber, projectNumber, whenSelected }) => {

    const handleButtonClick = (e) => whenSelected(e.target.name)

    // console.log(selectedNumber)

    // function here , then update local state, 



    const projectVisible = selectedNumber === projectNumber;
    // add state that is dependant on projectVisible

    return (
        <div className="project-wrapper">


            <button name={projectNumber} onClick={handleButtonClick}>{projectNumber}</button>
            <ProjectInfo projectNumber={projectNumber} projectVisible={projectVisible} />




            <style jsx>
                {`
                        button {
                            // transition: all .5s ease;
                            padding-top: 50px;
                            border-bottom: ${projectVisible ? "4px solid black" : "2px solid black"};
                            font-size: ${projectVisible ? "4rem" : "2rem"};

                        }
                        .project-wrapper {
                            padding-top: ${projectVisible ? 'unset' : '15vh'};

                            text-align: center;
                            order:${projectVisible ? "1" : "unset"};
                            flex-grow:${projectVisible ? "8" : "unset"};
                            flex-shrink: 5;
                            transition: flex-shrink .25s linear;
                        }

            `}
            </style>

        </div>
    )
}

export default Project

// CLICK



