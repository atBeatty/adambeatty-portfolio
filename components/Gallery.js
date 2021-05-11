


export const Gallery = ({ images }) => {

    const imageArray = images.map((image, i) => {
        if (image[0].match("basketball")) {
            return <img src={image[0]} />
        } else {

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
                width: '200px'
                // visibility: 'hidden'
            }


            return <div key={i} style={styleImageHolder} className="image-holder">


                {/* flex one */}
                <div style={style} className="img"></div>

                {/* flex two */}
                <div style={styleDescriptionHolder} className="image-desc">{image[1]}</div>


            </div>
        }
    })

    return <>
        <div className="gallery">
            <span className="title">snapshots</span>
            {imageArray}
        </div>
        <style jsx>
            {`
                img {
                    object-fit:contain;
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