import React from 'react'
import Anime, { anime } from 'react-animejs-wrapper'
import { useRef } from 'react'


export const AnimatedSlider = () => {

    return (<>
        <Anime
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '160px',
                height: '115px',
            }}
            config={{
                translateX: [
                    {
                        value: '+=50px',
                        duration: 500,
                    },
                    {
                        value: '+=50px',
                        duration: 500,
                    }
                ],
                backgroundColor: 'blue',
                loop: true,
                delay: anime.stagger(1000, { start: 200 }),
                easing: 'spring(1, 80, 13, 0)',
            }}
        >
            <div> This is a wierd one <Anime
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    width: '160px',
                    height: '115px',
                }}
                config={{
                    translateX: [-35, 0],
                    scale: [0, 1],
                    backgroundColor: 'blue',
                    loop: true,
                    delay: anime.stagger(250, { start: 200 }),
                    easing: 'spring(1, 80, 13, 0)',
                }}
            >
                <div>Hello</div>
            </Anime></div>
            <div> This is a wierd one</div>
            <div> This is a wierd one</div>
            <div> This is a wierd one</div>
            <div> This is a wierd one</div>
        </Anime>
    </>

    )
}

export default AnimatedSlider