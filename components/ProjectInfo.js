import ProjectDataStore from '../lib/ProjectDataStore.json'
import { useEffect, useState, useRef } from 'react'
import Anime, { anime } from 'react-animejs-wrapper'
import GitHubLink from '../components/GitHubLink'
import AnimatedArrow from './AnimatedArrow'





const ProjectInfo = ({ projectNumber, projectVisible }) => {

    const projectInfo = useRef(null)

    const [scrollTop, setScrollTop] = useState(0)

    const handleScrolling = (e) => setScrollTop(e.target.scrollTop)

    useEffect(() => {
        handleScrolling
    }, [])



    return (
        <div className="project-info">
            {projectVisible ?
                <section onScroll={handleScrolling} className={"project-details-wrapper"}>
                    <AnimatedArrow />
                    <h2>{ProjectDataStore[projectNumber]["language"]}</h2>
                    <h3>{ProjectDataStore[projectNumber]["name"]}</h3>
                    <p className="lateral-paralax">{ProjectDataStore[projectNumber]["content"]}</p>
                    <GitHubLink url="production_app" />

                    <Anime

                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'lightgrey',
                            alignItems: 'left',
                            width: '80px',
                        }}
                        config={{
                            translateX: [-35, 0],
                            scale: [0, 1],
                            loop: true,
                            delay: anime.stagger(100, { start: 200 }),
                        }}>
                        <p ref={projectInfo} className="lateral-paralax">{ProjectDataStore[projectNumber]["content"]}</p>
                    </Anime>
                    <GitHubLink url="production_app" />
                    <p ref={projectInfo} >{ProjectDataStore[projectNumber]["content"]}</p>
                </section > : ""}









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
                        .lateral-paralax {
                            position: relative;
                            left: ${scrollTop}px;
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
        </div >)
}

export default ProjectInfo

// CLICK



