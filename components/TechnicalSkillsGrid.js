import { useEffect, useState, useRef } from 'react'

import Skill from '../components/Skill'

const TechnicalSkillsGrid = ({ skillsArray }) => {
    console.log(skillsArray[1])

    const [highlightedTech, setHighlightedTech] = useState(null)
    const handleClick = (skillObj) => setHighlightedTech(skillObj)
    console.log(highlightedTech, "TECH")




    const arrayOfSkills = skillsArray.map((skill, index) => <Skill handleClick={handleClick} skill={skill} key={index} />)








    return <div className="technical-skills-grid">

        <div className="skills-container">
            {arrayOfSkills}
        </div >


        <div className="infoBox">
            {highlightedTech &&
                Object.entries(highlightedTech[1]).map((tech, index) => {

                    return <>
                        <p className="skill-title">{tech[0]}</p>
                        <p className="skill-content">{tech[1]}</p>
                    </>
                })
            }
        </div>



        <style jsx>
            {`  
                .skill-title {
                    font-family: Inconsolata;
                }
                .skill-content {
                    font-weight:400;
                    font-size: 12px;
                    margin-bottom: 20px;
                }
                button {
                    color:red;
                }
                .technical-skills-grid {
                    display: flex;
                }
                .infoBox {
                    padding:25px;
                    padding-top: 200px;
                    width:30vw;
                }
                ::-webkit-scrollbar {
                        width: 0px;
                        background: transparent; /* make scrollbar transparent */
                    }

                .skills-container {
                    height:80vh;
                    width:80vw;
                    overflow:scroll;
                    justify-content:center;
                    align-items: flex-start;
                    display:flex;
                    gap:4rem;
                    flex-wrap:wrap;
                }
            
           
           `}
        </style>
    </div >
}

export default TechnicalSkillsGrid