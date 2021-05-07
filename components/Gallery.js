


export const Gallery = ({ images }) => {
    const imageArray = images.map((url, i) => {
        const style = { backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: `url(${url})`, height: '400px', width: '400px' }

        return <div style={style} key={i} className="img"></div>
    })

    return <>
        <div className="gallery">
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