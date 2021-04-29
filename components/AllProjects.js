import Project from './Project'
import { useState } from 'react'
import ProjectDataStore from '../lib/ProjectDataStore.json'




const AllProjects = () => {

    const [selectedProject, setSelectedProject] = useState(null)
    const [hoveredProject, setHoveredProject] = useState(null)



    const handleProjectClick = (number) => {
        setSelectedProject(number)
        setHoveredProject('')
    }
    console.log(hoveredProject)
    // console.log(ProjectDataStore[hoveredProject]['name'])
    const handleHoverState = (number) => setHoveredProject(number)
    return <><div className="projects-container">


        <Project selectedNumber={selectedProject} projectNumber="1" whenHovered={handleHoverState} whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="2" whenHovered={handleHoverState} whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="3" whenHovered={handleHoverState} whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="4" whenHovered={handleHoverState} whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="5" whenHovered={handleHoverState} whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="6" whenHovered={handleHoverState} whenSelected={handleProjectClick} />
    </div>

        {

            <div className="hover-box">
                {hoveredProject && ProjectDataStore[hoveredProject]['name']}
            </div>
        }
        <style jsx>
            {`          
                        .hover-box {
                            position:absolute;
                            top: 40%;
                            font-weight:100;
                            left: ${!selectedProject ? '50%' : '0px'};
                            
                        } 
                          

                        .projects-container {
                            display: flex;
                            justify-content: space-around;
                            gap: ${selectedProject ? "unset" : "2rem"};
                            // flex-wrap: wrap;
                            
                        }
                        
            `}
        </style>
    </>
}


export default AllProjects