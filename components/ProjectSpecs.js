

export default function ProjectSpecs({ name, scrollTop, size, technologies, content }) {

    return <div className="project-specs">

        <h2 className="title">{name}</h2>

        <div>
            <br />
            <span className="content">{technologies}</span>
        </div >
        <div>{content.map(paragraph => <p>{paragraph}</p>)}</div>


        <style jsx>
            {`
            p {
                text-align: justify;
                font-weight: 300;
                magin-bottom: 20px;

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