


export const Gallery = ({ images }) => {
    const imageArray = images.map((url, i) => <img key={i} src={url} />)

    return <div>{imageArray}
    </div>
}


export default Gallery