

export default function ProjectSpecs({ name, scrollTop, size, technologies, content }) {

    return <div className="project-specs">

        <h2 className="title">{name}</h2>

        <h3>{technologies}</h3>


        <div>{content.map(paragraph => <p>{paragraph}</p>)}</div>


        <style jsx>
            {`
            p {
                text-align: justify;
                font-weight: 300;
                magin-bottom: 20px;

            }
           
             `}
        </style>
    </div >
}