import AnimatedTitle from './AnimatedTitle'
import ProjectDataStore from '../lib/ProjectDataStore.json'
import { useEffect, useState } from 'react'
import Anime, { anime } from 'react-animejs-wrapper'




const ProjectInfo = ({ projectNumber, projectVisible }) => {
    // console.log(ProjectDataStore)
    // console.log(selectedNumber)
    if (ProjectDataStore[projectNumber]) {
        console.log(ProjectDataStore[projectNumber]["name"])

        // const { name, content, language } = ProjectDataStore[projectNumber]
    }






    const hasProjectInfo = ProjectDataStore[projectNumber];
    console.log(projectVisible)
    return (
        <div className="project-info">
            {projectVisible && (

                // <Anime
                //     style={{
                //         display: 'flex',
                //     }}
                //     config={{
                //         backgroundColor: 'blue',
                //         translateX: [
                //             { value: 250, duration: 1000, delay: 1500 },
                //             { value: 0, duration: 1000, delay: 500 }
                //         ],
                //         translateY: [
                //             { value: -40, duration: 500 },
                //             { value: 40, duration: 500, delay: 1000 },
                //             { value: 0, duration: 500, delay: 1000 }
                //         ],
                //         scaleX: [
                //             { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                //             { value: 1, duration: 900 },
                //             { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                //             { value: 1, duration: 900 }
                //         ],
                //         scaleY: [
                //             { value: [1.75, 1], duration: 500 },
                //             { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                //             { value: 1, duration: 450 },
                //             { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                //             { value: 1, duration: 450 }
                //         ],
                //         easing: 'easeOutElastic(1, .8)',
                //         loop: true,
                //         keyframes: [
                //             { translateY: 0 },
                //             { translateX: 110 },
                //             { translateY: 40 },
                //             {
                //                 background: "blue",
                //                 translateX: -200,
                //                 translateY: 500
                //             },
                //             { translateY: 0 }
                //         ],
                //         duration: 4000,
                //         easing: 'easeOutElastic(1, .8)',
                //         loop: false,
                //         delay: anime.stagger(1000, { start: 2000 }),
                //         easing: 'spring(1, 80, 13, 0)',
                //     }}
                // >
                <>
                    <h2>{ProjectDataStore[projectNumber]["language"]}</h2>
                    <h2>{ProjectDataStore[projectNumber]["name"]}</h2>
                    <p>{ProjectDataStore[projectNumber]["content"]}</p>

                </>


                // </Anime>







            )}
            <style jsx>
                {`
                       
                        .project-info {
                            overflow: scroll;
                            height: 90vh;
                            display:flex;
                            flex-direction: column;
                            text-align: center;
                            
                        }      

                `}
            </style>
        </div>
    )
}

export default ProjectInfo

// CLICK



