import { useEffect, useState, useRef } from 'react'




const Skill = ({ skill }) => {
    console.log(skill)
    const techName = skill[0]
    const code = skill[1].code
    const [isSelected, setSelected] = useState(false)

    const handleClick = () => setSelected(!isSelected)

    console.log(isSelected)
    return <div className="skill-wrapper">
        <h2 onClick={handleClick}>{techName}</h2>

        <section className="code">{code}</section>

        <style jsx>
            {`
            .code {
                display:${isSelected ? "none" : "normal"};
            }
            .skill-wrapper {
                align-items: flex-start;
                height: auto;
                padding: 1rem;
                min-width:200px;
                min-height:200px;
                width: 20vw;
                border:6px solid red;
            }
             }
             `}
        </style></div>
}

export default Skill