

export default function ProjectSpecs({ name, scrollTop, size, technologies, content }) {

    return <div className="project-specs">

        <h2 className="title">{name}</h2>

        <h3>{technologies}</h3>


        <div className="content-wrapper">{content.map(paragraph => <p>{paragraph}</p>)}</div>


        <style jsx>
            {`
            .content-wrapper {
                padding-left:10px;
                padding-right:10px;
            }
            p {
                text-align: justify;
                font-weight: 300;
                magin-bottom: 20px;
                max-width: 600px;
                margin-left:auto;
                margin-right:auto;


            }
           
             `}
        </style>
    </div >
}