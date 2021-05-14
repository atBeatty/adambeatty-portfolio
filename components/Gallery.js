import { useState, useEffect } from 'react'

import Anime, { anime } from 'react-animejs-wrapper'

export const Gallery = ({ images }) => {




    const imageArray = images.map((image, i) => {

        const style = {
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${image[0]})`,
            height: '400px',
            width: '400px'
        }
        const styleImageHolder = {
            display: 'flex',
            alignItems: 'center'
        }
        const styleDescriptionHolder = {
            fontFamily: 'Inconsolata',
            flexShrink: 1,
            flexGrow: 4,
            textAlign: 'left',
            width: '200px',
            paddingLeft: '4px',
            // visibility: 'hidden'
        }


        return <div key={i} style={styleImageHolder} className="image-holder">


            {/* flex one */}

            <div style={style} id={i} className="img"></div>

            {/* flex two */}
            <div style={styleDescriptionHolder} className="image-desc">{image[1]}</div>


        </div >
    }
    )

    return <>
        <div className="gallery">
            <span className="title">snapshots</span>
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