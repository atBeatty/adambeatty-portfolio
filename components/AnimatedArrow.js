
import Anime, { anime } from 'react-animejs-wrapper'


const AnimatedArrow = ({ delay, letters, translateX }) => {

    return <>
        <Anime
            style={
                {
                    textAlign: 'center',
                    paddingTop: '200px',
                }
            }
            config={{

                translateY: [
                    { value: -80, duration: 500 },
                    { value: 800, duration: 500, delay: 1000 },
                    { value: 0, duration: 500, delay: 1000 },
                    { value: 800, duration: 1000, delay: 1000 },
                ],
                easing: 'easeOutElastic(1, .8)',
                loop: true
            }}
            config={{
                // targets: '.property-keyframes-demo .el',
                // translateX: [
                //     { value: 250, duration: 1000, delay: 500 },
                //     { value: 0, duration: 1500, delay: 500 }
                // ],
                translateY: [
                    { value: -40, duration: 500 },
                    { value: 400, duration: 500, delay: 1000 },
                    { value: 0, duration: 500, delay: 1000 },
                    { value: 400, duration: 1000, delay: 1000 },
                ],
                scaleX: [
                    { value: 4, duration: 100, delay: 500, easing: 'linear' },
                    { value: 1, duration: 400 },
                    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                    { value: 1, duration: 900 },
                    { value: 4, duration: 100, delay: 500, easing: 'linear' },
                    { value: 1, duration: 400 },
                    { value: 4, duration: 100, delay: 500, easing: 'easeInOut' },
                    { value: 1, duration: 900 }
                ],
                scaleY: [
                    { value: [0, 5], duration: 2500 },
                    { value: 5, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                    { value: 1, duration: 450 },
                    { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                    { value: 1, duration: 450 }
                ],
                easing: 'easeOutElastic(1, .8)',
                loop: true
            }}
            config={{

                translateY: [
                    { value: -80, duration: 500 },
                    { value: 800, duration: 500, delay: 1000 },
                    { value: 0, duration: 500, delay: 1000 },
                    { value: 800, duration: 1000, delay: 1000 },
                ],
                easing: 'easeOutElastic(1, .8)',
                loop: true
            }}
        // config={{
        //     scale: [0, 1],
        //     keyframes: [
        //         { translateY: translateX },
        //         { scale: [1, .5] }
        //         // translateY: [0, (el, i) => i * 100],
        //         // { translateY: translateX },

        //     ],

        //     // delay: anime.stagger(2000, {start: 150, end: 250 }),
        //     // delay: anime.stagger(150, {start: 750 })

        //     // config={{
        //     //     targets: 'div',
        //     //     opacity: [0, 1],
        //     //     duration: 3000,
        //     //     easing: 'linear',
        //     //     delay: anime.stagger(500, { start: 750 })
        //     // }}


        //     targets: "img.arrow",
        //     strokeWidth: "10px",
        //     delay: 500,
        //     duration: 2000,
        //     scale: [0, 1],
        //     loop: true,
        //     easing: "easeInOutSine"
        // }}
        >

            <img className="arrow" src="/arrow.svg"></img>


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
                height: 9rem;
                width: 9rem;
            }
        `}
        </style>
    </>
}


export default AnimatedArrow