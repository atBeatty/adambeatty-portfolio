import TechList from '../../lib/TechList.json'
import NavBar from '../../components/NavBar'
import TechnicalSkillsGrid from '../../components/TechnicalSkillsGrid'

export default function LanguageIndex() {

    console.log()

    const techArray = Object.entries(TechList)


    return <div>
        <NavBar />
        <h1>Languages</h1>
        <TechnicalSkillsGrid skillsArray={techArray} />

    </div>
}