import React, { useRef } from 'react'
import Anime from 'react-animejs-wrapper'

export const MyAnimationExample = () => {
    const blueSquare = {
        height: '20px',
        width: '20px',
        backgroundColor: 'lightBlue',
    };

    const animatedSquaresRef = useRef(null)

    const restart = () => animatedSquaresRef.current.restart();
    const play = () => animatedSquaresRef.current.play();
    const pause = () => animatedSquaresRef.current.pause();
    const reverse = () => animatedSquaresRef.current.reverse();
    const seek = () => animatedSquaresRef.current.seek(1000);
    const seekPercent = () => animatedSquaresRef.current.seekPercent(50);

    return (
        <>
            <Anime
                ref={animatedSquaresRef}
                config={{
                    translateX: function (el, i) {
                        return el.getAttribute('value')
                    },
                    delay: function (_, i) {
                        return i * 100;
                    },
                    loop: true,
                    direction: 'alternate',
                    easing: 'easeInOutSine',
                    autoplay: true,
                }}
            >
                <div value={'450'} style={blueSquare}>1</div>
                <div value={'100'} style={blueSquare}>2</div>
                <div value={'30'} style={blueSquare}>3</div>
            </Anime>
            <button onClick={restart}>Reset Animation</button>
            <button onClick={play}>Play Animation</button>
            <button onClick={pause}>Pause Animation</button>
            <button onClick={reverse}>Reverse Animation</button>
            <button onClick={seek}>Seek to 1000 ms</button>
            <button onClick={seekPercent}>Seek to 50%</button>
        </>
    )
}

export default MyAnimationExample