import Link from 'next/link'


export default function NavBar() {

    return <header>
        <Link href='/'><a>Home</a></Link>
        <Link href='/languages'><a>Languages</a></Link>
        <Link href='/aboutme'><a>Home</a></Link>

        <style jsx>
            {`
            header {
                font-style:all-caps;
                padding-top:50px;
                display:flex;
                font-family: Inconsolata;
                justify-content:space-around;
                
            }
        `}</style></header>
}