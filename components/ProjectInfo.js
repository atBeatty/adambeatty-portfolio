import ProjectDataStore from '../lib/ProjectDataStore.json'
import { useEffect, useState, useRef } from 'react'
import Anime, { anime } from 'react-animejs-wrapper'
import GitHubLink from '../components/GitHubLink'
import Gallery from '../components/Gallery'
import AnimatedArrow from './AnimatedArrow'
import ProjectSpecs from './ProjectSpecs'





const ProjectInfo = ({ projectNumber, projectVisible }) => {
    const { name, technologies, size, website, images, content } = ProjectDataStore[projectNumber]
    // console.log(content.split("700").map(el => <section>{el}</section>))
    const projectInfo = useRef(null)



    return (
        <div className="project-info">
            {projectVisible
                ?
                <section className={"project-details-wrapper"}>

                    <ProjectSpecs name={name} size={size} website={website} technologies={technologies} content={content} />

                    <Gallery images={images} />

                    <GitHubLink url={website} />
                </section >
                :
                ""}









            <style jsx>
                {`
                        
                        ::-webkit-scrollbar {
                            width: 0px;
                            background: transparent; /* make scrollbar transparent */
                        }
                        .arrows-wrapper {
                            height: 100vh;
                        }
                        .project-details-wrapper {
                            max-width:600px;
                            overflow:scroll;
                            
                            scrollbar-width: none;
                        }
                        
                        p {
                            text-align: justify;
                            font-family: Fira Sans;
                            text-justify: inter-word;
                            font-weight: 100;
                            font-size: 1rem;
                        }
                        span.title {
                            font-size: 10px;
                        }
                        .project-info {
                            overflow: scroll;
                            // height: 90vh;
                            display:flex;
                            align-items: center;
                            flex-direction: column;
                            text-align: center;

                        }


                `}
            </style>
            <style jsx>
                {`          

                @media screen and (max-width: 600px) {
                        .project-details-wrapper {
                            max-width:unset;
                        }
                    }

                }
            `}
            </style>
        </div >)
}

export default ProjectInfo

// CLICK



