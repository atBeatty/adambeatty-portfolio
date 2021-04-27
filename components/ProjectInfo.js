import ProjectDataStore from '../lib/ProjectDataStore.json'
import { useEffect, useState, useRef } from 'react'
import Anime, { anime } from 'react-animejs-wrapper'
import GitHubLink from '../components/GitHubLink'





const ProjectInfo = ({ projectNumber, projectVisible }) => {

    const previousCoordinates = useRef({ x: 0, y: 0 })
    const projectInfo = useRef(null)

    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

    const handleScrolling = (e) => console.log(e.target.scrollTop)




    return (
        <div ref={projectInfo} className="project-info">
            {projectVisible ?
                <section onScroll={handleScrolling} className={"project-details-wrapper"}>
                    <h2>{ProjectDataStore[projectNumber]["language"]}</h2>
                    <h3>{ProjectDataStore[projectNumber]["name"]}</h3>
                    <p className="lateral-paralax">{ProjectDataStore[projectNumber]["content"]}</p>
                    <GitHubLink url="production_app" />
                    <p className="lateral-paralax">{ProjectDataStore[projectNumber]["content"]}</p>
                    <GitHubLink url="production_app" />
                    <p>{ProjectDataStore[projectNumber]["content"]}</p>
                </section> : ""}









            <style jsx>
                {`
                        
                        ::-webkit-scrollbar {
                            width: 0px;
                            background: transparent; /* make scrollbar transparent */
                        }
                        .project-details-wrapper {
                            max-width:600px;
                            overflow:scroll;
                            
                            scrollbar-width: none;
                        }
                  
                        p {
                            font-family: Fira Sans;
                            font-weight: 100;
                        }
                       
                        .project-info {
                            overflow: scroll;
                            height: 90vh;
                            display:flex;
                            align-items: center;
                            flex-direction: column;
                            text-align: center;
                            
                        }      

                `}
            </style>
        </div>)
}

export default ProjectInfo

// CLICK



