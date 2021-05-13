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
            }
            .skill-wrapper {
                // transition:all 1s linear;
                transform-origin: bottom right;
                transition: transform 0.25s ease-out;
                padding: 1rem;
                width: 20vw;
                height:20vw;
                border:6px solid red;
            }
             }
             `}
        </style></div>
}

export default Skill