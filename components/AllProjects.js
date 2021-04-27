import Project from './Project'
import { useState } from 'react'

const AllProjects = () => {

    const [selectedProject, setSelectedProject] = useState(null)



    const handleProjectClick = (number) => setSelectedProject(number)
    // console.log(selectedProject)
    return <div className="projects-container">


        <Project selectedNumber={selectedProject} projectNumber="1" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="2" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="3" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="4" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="5" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="6" whenSelected={handleProjectClick} />
        <style jsx>
            {`
                        .projects-container {
                            display: flex;
                            justify-content: space-around;
                            gap: ${selectedProject ? "unset" : "2rem"};
                            // flex-wrap: wrap;
                            
                        }
                        
            `}
        </style>
    </div>
}


export default AllProjects