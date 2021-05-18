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
        const imageHolderStyle = {

            display: "flex",
            fontFamily: "Inconsolata",
            textAlign: "left",
            marginTop: '50px',
            paddingLeft: "10px"

        }
        const imageDescStyle = {
            marginTop: '50px',
            paddingLeft: "10px",

        }


        return <div style={imageHolderStyle} key={i} className="image-holder">


            {/* flex one */}
            {isMovie
                ?
                isBasketballCli
                    ?
                    <video style={basketballStyle} width="80%" playbackRate="3" controls loop autoPlay>
                        <source src={image[0]} type="video/mp4" />
                    </video>
                    :
                    <video width="80%" playbackRate="2" loop autoPlay>
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