import { set } from 'animejs'
import Link from 'next/link'


const GitHubLink = ({ url }) => {
    return (
        <div className='links-wrapper'>
            <h2>links</h2>



            {
                url.includes("callme")
                    ?
                    <Link href={url} ><a>WWW</a></Link>
                    :
                    <Link href={url} ><a><img src='/Octicons-mark-github.svg' /></a></Link>
            }

            <style jsx>
                {`

                    span {
                        font-weight: 100;
                        color: red;

                    }
                    img {
                        // margin-top: 50%;
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