
import Anime, { anime } from 'react-animejs-wrapper'


const AnimatedArrow = ({ delay, letters, translateX }) => {
    const letterDivs = letters.split('').map((el, index) => <div key={index} style={{ display: 'inline-block' }} className="letter">{el}</div>)

    return <>
        <Anime
            style={
                {
                    textAlign: 'center',
                    paddingBottom: '200px',
                }
            }
            config={{
                scale: [0, 1],
                keyframes: [
                    { translateY: translateX },
                    // translateY: [0, (el, i) => i * 100],
                    // { translateY: translateX },

                ],
                duration: delay,
                delay: anime.stagger(200, { start: 750 }),
                // delay: anime.stagger(2000, {start: 150, end: 250 }),
                // delay: anime.stagger(150, {start: 750 })
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


            <img className="arrow" src="/arrow.svg"></img>
            {letterDivs}


        </Anime>


        <style jsx>
            {`
                .letter {
                    margin-top: 100px;
                    font-weight: 100;
                    margin-top: 10vh;
                    display:inline;
                }
          
            
            img {
                height: 4rem;
                width: 4rem;
            }
        `}
        </style>
    </>
}


export default AnimatedArrow