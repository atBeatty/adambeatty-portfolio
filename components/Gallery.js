


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
        }

        return <div key={i} style={styleImageHolder} className="image-holder">
            <div style={style} className="img"></div>
            <div>{image[1]}</div>
        </div>
    })

    return <>
        <div className="gallery">
            <span className="title">snapshots</span>
            {imageArray}
        </div>
        <style jsx>
            {`
                .image-holder {
                    display:flex;
                    backgroundColor:black;

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