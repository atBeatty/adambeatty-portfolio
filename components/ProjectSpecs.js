

export default function ProjectSpecs({ name, scrollTop, size, language, content }) {

    return <div className="project-specs">
        <div><span className="title">name</span><span className="content">{name}</span></div>
        <div><span className="title">size</span><span className="content">{size}</span></div>
        <div><span className="title">language</span><span className="content">{language}</span></div>
        {content.map(paragraph => <p>{paragraph}</p>)}


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
    </div>
}