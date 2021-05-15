import { useState, useEffect } from 'react'

import Anime, { anime } from 'react-animejs-wrapper'

export const Gallery = ({ images }) => {



    const imageArray = images.map((image, i) => {
        const isMovie = image[0].split('/')[1] === "movies"
        const isBasketballCli = image[0].includes('basketball-cli')
        console.log(isBasketballCli)

        const basketballStyle = {
            mixBlendMode: 'darken',
            objectFit: 'unset'
        }


        return <div key={i} className="image-holder">


            {/* flex one */}
            {isMovie
                ?
                isBasketballCli
                    ?
                    <video style={basketballStyle} width="80%" playbackRate="2" loop autoPlay>
                        <source src={image[0]} type="video/mp4" />
                    </video>
                    :
                    <video width="80%" playbackRate="2" loop autoPlay>
                        <source src={image[0]} type="video/mp4" />
                    </video>
                :
                <img width="80%" src={image[0]}></img>
            }

            {/* flex two */}
            <div className="image-desc">{image[1]}</div>


        </div >

    })

    return <>
        <div className="gallery">
            <h2 className="title">snapshots</h2>
            {imageArray}
        </div>
        <style jsx>
            {`
                .image-holder {
                    display:flex;

                }
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