


export const Gallery = ({ images }) => {
    const imageArray = images.map((url, i) => <div style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${url})`, height: '400px', width: '400px' }} key={i} className="img"></div>)

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