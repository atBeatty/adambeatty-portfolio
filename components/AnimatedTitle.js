import React from 'react'
import Anime, { anime } from 'react-animejs-wrapper'
import { useRef, useState } from 'react'


export const AnimatedTitle = ({ content, name }) => {
    const [isClicked, setIsClicked] = useState(false)
    const handleOnClick = (e) => setIsClicked(!isClicked)
    return (<div onClick={handleOnClick}>
        <Anime
            style={{
                display: 'flex',
            }}
            config={{

                keyframes: [
                    { translateY: -40 },
                    { translateX: isClicked ? 250 : 10 },
                    { translateY: 40 },
                    { translateX: 0 },
                    { translateY: 0 }
                ],
                duration: 4000,
                easing: 'easeOutElastic(1, .8)',
                loop: isClicked,
                delay: anime.stagger(1000, { start: 200 }),
                easing: 'spring(1, 80, 13, 0)',
            }}
        >
            <h1>{name}</h1>




        </Anime>
    </div>

    )
}

export default AnimatedTitle