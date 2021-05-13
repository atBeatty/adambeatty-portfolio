import Project from './Project'
import { useEffect, useState } from 'react'
import ProjectDataStore from '../lib/ProjectDataStore.json'



const AllProjects = () => {

    const [selectedProject, setSelectedProject] = useState(null)
    const [hoveredProject, setHoveredProject] = useState(null)
    // two things - setting hover project state , selected project state.
    console.log(ProjectDataStore[hoveredProject])
    const handleHover = (number) => setHoveredProject(number)

    const handleProjectClick = (number) => {
        setSelectedProject(number)
    }

    return <><div className="projects-container">






        <Project whenHovered={handleHover} selectedNumber={selectedProject} projectNumber="1" whenSelected={handleProjectClick} />
        <Project whenHovered={handleHover} selectedNumber={selectedProject} projectNumber="2" whenSelected={handleProjectClick} />
        <Project whenHovered={handleHover} selectedNumber={selectedProject} projectNumber="3" whenSelected={handleProjectClick} />
        <Project whenHovered={handleHover} selectedNumber={selectedProject} projectNumber="4" whenSelected={handleProjectClick} />
        <Project whenHovered={handleHover} selectedNumber={selectedProject} projectNumber="5" whenSelected={handleProjectClick} />
        <Project whenHovered={handleHover} selectedNumber={selectedProject} projectNumber="6" whenSelected={handleProjectClick} />
    </div>
        <div className="hover-box">
            {(ProjectDataStore[hoveredProject] && selectedProject) && ProjectDataStore[hoveredProject]["name"]}

        </div>

        {


        }
        <style jsx>
            {`          
                        .hover-box {
                            font-weight:100;
                            position:fixed; 
                            top: 50vh;
                            left: 50px;
                            width, height: auto;

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