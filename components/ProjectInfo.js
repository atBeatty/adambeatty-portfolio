import ProjectDataStore from '../lib/ProjectDataStore.json'
import { useEffect, useState, useRef } from 'react'
import Anime, { anime } from 'react-animejs-wrapper'
import GitHubLink from '../components/GitHubLink'
import Gallery from '../components/Gallery'
import AnimatedArrow from './AnimatedArrow'





const ProjectInfo = ({ projectNumber, projectVisible }) => {
    const { name, language, website, images, content } = ProjectDataStore[projectNumber]
    // console.log(content.split("700").map(el => <section>{el}</section>))
    const projectInfo = useRef(null)

    const [scrollTop, setScrollTop] = useState(0)

    const handleScrolling = (e) => setScrollTop(e.target.scrollTop)

    useEffect(() => {
        handleScrolling
    }, [])



    return (
        <div className="project-info">
            {projectVisible
                ?
                <section onScroll={handleScrolling} className={"project-details-wrapper"}>
                    <div className="arrows-wrapper">
                        <AnimatedArrow delay={500} letters="SCROLL" />
                        <AnimatedArrow delay={1500} letters="FOR MORE" />
                    </div>
                    <div className="project-specs">

                        <p><span className="title">Name</span>{name}</p>
                        <p>{language}</p>
                    </div>

                    {/* <p>{content}</p> */}
                    {content.split("700").map(el => <p><br />{el}</p>)}
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
                            text-align: left;
                            height: 100vh;
                        }
                        .project-details-wrapper {
                            max-width:600px;
                            overflow:scroll;
                            
                            scrollbar-width: none;
                        }
                        .lateral-paralax {
                            position: relative;
                        }
                        p {
                            text-align: justify;
                            font-family: Fira Sans;
                            text-justify: inter-word;
                            font-weight: 100;
                            font-size: 1rem;
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



