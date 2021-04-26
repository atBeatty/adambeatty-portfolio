import AnimatedTitle from './AnimatedTitle'
import ProjectDataStore from '../lib/ProjectDataStore.json'
import { useEffect, useState } from 'react'




const ProjectInfo = ({ projectNumber, projectVisible }) => {
    // console.log(ProjectDataStore)
    // console.log(selectedNumber)
    if (ProjectDataStore[projectNumber]) {
        console.log(ProjectDataStore[projectNumber]["name"])
    }






    const hasProjectInfo = ProjectDataStore[projectNumber];
    console.log(projectVisible)
    return (
        <>
            {projectVisible && (


                <div className="project-info">
                    <p>{ProjectDataStore[projectNumber]["language"]}</p>
                    <p>{ProjectDataStore[projectNumber]["name"]}</p>
                    <p>{ProjectDataStore[projectNumber]["content"]}</p>

                    <AnimatedTitle />




                    <style jsx>
                        {`
                        p {
                            font-size: 50px;
                        }
                    .project-info {
                        overflow: scroll;
                        height: 800px;
                        
                    }      

            `}
                    </style>

                </div>
            )}
        </>
    )
}

export default ProjectInfo

// CLICK



