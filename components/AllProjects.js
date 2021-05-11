import Project from './Project'
import { useEffect, useState } from 'react'
import ProjectDataStore from '../lib/ProjectDataStore.json'



const AllProjects = () => {

    const [selectedProject, setSelectedProject] = useState(null)
    // two things - setting hover project state , selected project state.

    const handleProjectClick = (number) => {
        setSelectedProject(number)
    }

    return <><div className="projects-container">






        <Project selectedNumber={selectedProject} projectNumber="1" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="2" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="3" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="4" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="5" whenSelected={handleProjectClick} />
        <Project selectedNumber={selectedProject} projectNumber="6" whenSelected={handleProjectClick} />
    </div>

        {


        }
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
    </>
}


export default AllProjects