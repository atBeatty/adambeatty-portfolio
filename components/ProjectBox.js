import AnimatedSlider from '../components/AnimatedSlider'
import AnimatedPlayerSkills from './AnimatedPlayerSkills'
import Anime, { anime } from 'react-animejs-wrapper'
import { useState, useEffect } from 'react'
import ProjectBar from '../components/ProjectBar'
import { set } from 'animejs'




export default function ProjectBox() {
    const [childClicked, setChildClicked] = useState('')


    const handleOnClick = (e) => setChildClicked(e.target.id);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log('This will run after 1 second!')
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);




    return <div className="main-wrapper">
        <div id="1" onClick={handleOnClick} className="bar">
            <span className="number-large">1</span>

            <ProjectBar key={1} name="Golf App" />
        </div>

        <div id="2" onClick={handleOnClick} className="bar">
            <span className="number-large">2</span>

            <ProjectBar key={2} name="D3 App" />
        </div>

        <div id="3" onClick={handleOnClick} className="bar">
            <span className="number-large">3</span>

            <ProjectBar key={3} name="Ruby On Rails" />
        </div>

        <div id="4" onClick={handleOnClick} className="bar">
            <span className="number-large">4</span>

            <ProjectBar key={4} name="Production App" />
        </div>

        <div id="5" onClick={handleOnClick} className="bar">
            <span className="number-large">5</span>

            <ProjectBar key={5} name="D3 App V2" />
        </div>

        <div id="6" onClick={handleOnClick} className="bar">
            <span className="number-large">6</span>
            <ProjectBar key={6} name="REGEX" />
        </div>

        <style jsx>
            {`
                .main-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    justify-items: center;
                    justify-content: space-between;
                }
                .bar {
                    padding-top: 25vh;
                    text-align: center;
                    // width: 15vw;
                    height: 100vh;
                    background-color: inherit;
                    border: 2px solid red;
                }
           
                .bar:nth-child(${childClicked}) {
                    padding: 5px;
                    background:orange;
                    flex-grow: 50;
                }
                .bar:not(.bar:nth-child(${childClicked})) {
                    border: 2px solid white;
                    height: 100vh;
                    padding: 5px;
                    flex-grow: 50;
                    background:blue;
                }
                
               

      `}
        </style>
    </div >
}