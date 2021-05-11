import TechList from '../../lib/TechList.json'
import NavBar from '../../components/NavBar'
import TechnicalSkillsGrid from '../../components/TechnicalSkillsGrid'

export default function LanguageIndex() {

    console.log()

    const techArray = Object.entries(TechList)


    return <div>
        <NavBar />
        <TechnicalSkillsGrid skillsArray={techArray} />

    </div>
}