import AnimatedSlider from '../components/AnimatedSlider'
import AnimatedPlayerSkills from './AnimatedPlayerSkills'
import Anime, { anime } from 'react-animejs-wrapper'
import { useState, useEffect } from 'react'
import ProjectBar from '../components/ProjectBar'
import { set } from 'animejs'




export default function ProjectBox() {
    const [childClicked, setChildClicked] = useState(null)


    const handleOnClick = (e) => setChildClicked(e.target.id);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log('This will run after 1 second!')
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);

    console.log(childClicked, "NTH CHILD")



    return <div className="main-wrapper">
        <div id="1" onClick={handleOnClick} className="bar">
            <span className="number-large">1</span>

            <ProjectBar proj="1" key={1} name="Golf App" />
        </div>

        <div id="2" onClick={handleOnClick} className="bar">
            <span className="number-large">2</span>

            <ProjectBar proj="2" key={2} name="D3 App" />
        </div>

        <div id="3" onClick={handleOnClick} className="bar">
            <span className="number-large">3</span>

            <ProjectBar proj="3" key={3} name="Ruby On Rails" />
        </div>

        <div id="4" onClick={handleOnClick} className="bar">
            <span className="number-large">4</span>

            <ProjectBar proj="4" key={4} name="Production App" />
        </div>

        <div id="5" onClick={handleOnClick} className="bar">
            <span className="number-large">5</span>

            <ProjectBar proj="5" key={5} name="D3 App V2" />
        </div>

        <div id="6" onClick={handleOnClick} className="bar">
            <ProjectBar proj="6" key={6} name="REGEX" />
        </div>

        <style jsx>
            {`
            
                .main-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    justify-content: space-between;
                }
                .bar {
                    border: 2px solid white;
                    height: 100vh;
                    padding: 5px;

                }
                .bar:nth-child(${childClicked}) {
                    background:orange;
                }
                .bar:not(.bar:nth-child(${childClicked})) {
                    background:blue;
                }
                
               

      `}
        </style>
    </div >
}