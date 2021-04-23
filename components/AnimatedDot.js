

import React from 'react'
import Anime, { anime } from 'react-animejs-wrapper'
import { useRef } from 'react'


export const AnimatedDot = ({ string }) => {

    return (<div className="animation-wrapper">
        <Anime
            style={{

            }}
            config={{
                // translateX: [-35, 200],
                scale: [.2, 1],
                backgroundColor: 'blue',
                loop: true,
                delay: anime.stagger(250, { start: 250 }),
                easing: 'spring(1, 80, 13, 0)',
            }}
        >
            <section className="redbox">{string}</section>
            {/* <Anime
                style={{
                    borderRadius: '50px'

                }}
                config={{
                    // translateX: [-35, 200],
                    scale: [.2, 1],
                    backgroundColor: 'blue',
                    loop: true,
                    delay: anime.stagger(450, { start: 250 }),
                    easing: 'spring(1, 200, 13, 20)',
                }}
            >
            </Anime> */}
        </Anime>

        <style jsx>
            {`
            .animation-wrapper {
                width: 500px;
                border: 1px solid yellow;
            }
            .redbox{
            }
            `}</style></div>

    )
}

export default AnimatedDot