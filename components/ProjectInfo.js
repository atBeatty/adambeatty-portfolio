
import { useEffect, useState } from 'react'





const ProjectInfo = (props) => {

    // console.log(selectedNumber)









    console.log(props.parentVisible)
    return (
        <div className="project-info">


            {props.parentVisible ? "I AM NOW VISIBLE" : ""}



            <style jsx>
                {`
                        

            `}
            </style>

        </div>
    )
}

export default ProjectInfo

// CLICK



