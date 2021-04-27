import { set } from 'animejs'
import Link from 'next/link'


const GitHubLink = ({ url }) => {
    return (
        <div className='links-wrapper'>

            <img src='/Octicons-mark-github.svg' />
            <Link href='/' >GitHubLink</Link>

            <span className="www-logo">WWW</span>

            <style jsx>
                {`

                    span {
                        font-weight: 100;
                        color: red;

                    }
                    img {
                        margin-top: 50%;
                        width: 50px;
                        height: 50px;
                    }
                    .links-wrapper {
                        align-items: center;
                        gap: 2rem;
                        display:flex;
                        flex-direction: column;
                    }


            `}
            </style>

        </div>
    )


}

export default GitHubLink