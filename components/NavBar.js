import Link from 'next/link'


export default function NavBar() {

    return <header>
        <a href='/'>Home</a>
        <Link href='/technical-skills'><a>Tech List</a></Link>
        <Link href='/about'><a>About Me</a></Link>

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