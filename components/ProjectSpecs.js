

export default function ProjectSpecs({ name, scrollTop, size, technologies, content }) {

    return <div className="project-specs">
        {/* <div><span className="title">name</span><br /><span className="content">{name}</span></div> */}
        <span className="title">{name}</span>
        {/* <div><span className="title">size</span><br /><span className="content">{size}</span></div > */}
        <div><br /><span className="content">{technologies}</span></div >
        <div><span className="title">description</span>{content.map(paragraph => <p>{paragraph}</p>)}</div>


        <style jsx>
            {`
            p {
                text-align: justify;
                font-weight: 300;

            }
            span:not(.content) {
                color:red;
            }
             span.title {
                //  font-size: ${(scrollTop - 1000) / 10}px;
             }
             span.content {
                //  font-size: ${(1000 - scrollTop) / 10}px;
             }
             `}
        </style>
    </div >
}