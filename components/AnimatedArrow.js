
import Anime, { anime } from 'react-animejs-wrapper'


const AnimatedArrow = ({ letters }) => {


    return <>
        <Anime
            style={{
                height: '100vh'
            }}
            config={{
                scale: [0, 1],
                translateY: [0, '+100'],
                duration: 3000,
                // delay: anime.stagger(150, { start: 750 }),
                delay: anime.stagger(250, { end: 2750 }),
                // delay: anime.stagger(150, { start: 750 })
            }}
        // config={{
        //     targets: 'div',
        //     opacity: [0, 1],
        //     duration: 3000,
        //     easing: 'linear',
        //     delay: anime.stagger(500, { start: 750 })
        // }}
        >

            <img className="arrow" src="/arrow.svg"></img>


            <div className="letter">S</div>
            <div className="letter">C</div>
            <div className="letter">R</div>
            <div className="letter">O</div>
            <div className="letter">L</div>
            <div className="letter">L</div>


        </Anime>


        <style jsx>
            {`
                .letter {
                    font-weight: 100;
                    margin-top: 10vh;
                    display:inline-block;
                }
          
            
            img {
                position:relative;
                height: 4rem;
                width: 4rem;
            }
        `}
        </style>
    </>
}


export default AnimatedArrow