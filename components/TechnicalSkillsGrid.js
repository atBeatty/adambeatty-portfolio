
import Skill from '../components/Skill'

const TechnicalSkillsGrid = ({ skillsArray }) => {
    console.log(skillsArray[1])


    const arrayOfSkills = skillsArray.map((skill, index) => <Skill skill={skill} key={index} />)








    return <>

        <div className="skills-container">
            {arrayOfSkills}
        </div>




        <style jsx>
            {`
                .skills-container {
                    display:flex;
                    gap:4rem;
                    flex-wrap:wrap;
                }
            
           
           `}
        </style>
    </>
}

export default TechnicalSkillsGrid