
import Anime, { anime } from 'react-animejs-wrapper'


const AnimatedArrow = () => {


    return <>
        <Anime
            style={{
                height: '100%'
            }}
            config={{

                scale: [0, 1],
                translateY: [-250, 150],
                duration: 5000,
                delay: anime.stagger(150, { start: 500 })
            }}>

            <img src="/arrow.svg"></img>
            <img src="/arrow.svg"></img>
            <img src="/arrow.svg"></img>
            <img src="/arrow.svg"></img>

        </Anime>
        <style jsx>
            {`
            img {
                position:relative;
                height: 4rem;
            }
        `}
        </style></>
}


export default AnimatedArrow