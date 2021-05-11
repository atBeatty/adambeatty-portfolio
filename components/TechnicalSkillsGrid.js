


const TechnicalSkillsGrid = ({ skillsArray }) => {
    console.log(skillsArray[1])
    const styleSkillWrapper = {

        width: '20vw',
        height: '20vw',
        border: '5px solid red',
    }

    const skillsJSX = skillsArray.map((skill, index) => <div style={styleSkillWrapper}>{index}
        <h2>{skill[1].experience}</h2></div>)

    return <>

        <div className="skills-container">{skillsJSX}</div>




        <style jsx>
            {`
            .skills-container {
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;

            }
            .skills-container *{
                flex-basis: 1 5 auto;
            }
           
           `}
        </style>
    </>
}

export default TechnicalSkillsGrid