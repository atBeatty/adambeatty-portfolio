import { useEffect, useState, useRef } from 'react'




const Skill = ({ skill, handleClick }) => {

    const techName = skill[0]
    const code = skill[1].code



    return <div className="skill-wrapper">
        <button><h2 onClick={() => handleClick(skill)}>{techName}</h2></button>

        {/* <section className="code">{code}</section> */}

        <style jsx>
            {`
            h2 {
                color: red;
                text-align: left;
                
            }
            .skill-wrapper {
                // transition:all 1s linear;
                
                width: 250px;
                height:250px;
                border:6px solid red;
            }
             }
             `}
        </style></div>
}

export default Skill