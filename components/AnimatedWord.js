
import Anime, { anime } from 'react-animejs-wrapper'


const AnimatedWord = ({ word }) => {


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
            <Anime
                config={{
                    targets: "img.arrow",
                    strokeWidth: "10px",
                    delay: 500,
                    duration: 2000,
                    scale: [0, 1],
                    loop: true,
                    easing: "easeInOutSine"
                }}
            >

                <img className="arrow" src="/arrow.svg"></img>


                <img className="arrow" src="/arrow.svg"></img>
            </Anime>
            {letterDivs}


        </Anime>


        <style jsx>
            {`
                .
        `}
        </style>
    </>
}


export default AnimatedWord