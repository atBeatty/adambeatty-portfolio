
import { useState } from 'react'

const Project = ({ selectedNumber, projectNumber, whenSelected }) => {

    const handleButtonClick = (e) => whenSelected(e.target.name)

    console.log(selectedNumber)






    return (

        <div className="project-wrapper">
            {selectedNumber === projectNumber ? "FUCK YES" : "FUCK NO"}




            <button name={projectNumber} onClick={handleButtonClick}>{projectNumber}</button>

        </div>
    )
}

export default Project