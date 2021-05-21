import { useState, useLayoutEffect } from 'react'

import Anime, { anime } from 'react-animejs-wrapper'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}


export const Gallery = ({ images }) => {
    const [width, height] = useWindowSize();


    console.log(width)
    const imageArray = images.map((image, i) => {
        const isMovie = image[0].split('/')[1] === "movies"
        const isBasketballCli = image[0].includes('basketball-cli')

        const basketballStyle = {
            mixBlendMode: 'darken',
            objectFit: 'unset'
        }
        const imageHolderStyle = {

            display: "flex",
            fontFamily: "Inconsolata",
            textAlign: "justify",
            marginTop: '50px',
            paddingLeft: "10px",
            paddingRight: "10px"

        }
        const imageDescStyle = {
            marginTop: '50px',
            paddingLeft: "10px",

        }


        return <div style={imageHolderStyle} key={i} className="image-holder">


            {/* flex one */}
            {width > 600
                ?
                isMovie
                    ?
                    isBasketballCli
                        ?
                        <video style={basketballStyle} width="70%" playbackRate="3" controls loop autoPlay>
                            <source src={image[0]} type="video/mp4" />
                        </video>
                        :
                        <video width="70%" playbackRate="3" loop controls autoPlay>
                            <source src={image[0]} type="video/mp4" />
                        </video>
                    :
                    <img width="70%" src={image[0]}></img>
                :
                isMovie
                    ?
                    isBasketballCli
                        ?
                        <video style={basketballStyle} width="70%" playbackRate="3" loop controls >
                            <source src={image[0]} type="video/mp4" />
                        </video>
                        :
                        <video width="70%" playbackRate="3" loop controls>
                            <source src={image[0]} type="video/mp4" />
                        </video>
                    :
                    <img width="70%" src={image[0]}></img>

            }

            {/* flex two */}
            <div style={imageDescStyle} className="image-desc">{image[1]}</div>


        </div >

    })

    return <>
        <div className="gallery">
            <h2 className="title">snapshots</h2>
            {imageArray}
        </div>
        <style jsx>
            {`
            
                .gallery {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    gap: 2rem;
                }
    `}
        </style>
    </>
}


export default Gallery