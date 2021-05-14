import { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'


export default function About() {

    const [isLongVersion, setLongVersion] = useState(true)

    useEffect(() => {


    })

    const handleClick = () => setLongVersion(!isLongVersion)



    return <div className="about-wrapper">
        <NavBar></NavBar>


        <button onClick={handleClick}>Long</button>
        <div className="column-layout">
            <p className="paragraph">
                My name is Adam Beatty and I am at where <span className="short">I</span> am at because I am trying my absolute hardest to find the one thing in life I <span className="short">love</span> to do. I graduated from Indiana University in the year 2008 with a degree in finance. For those who may need to be reminded, this was the year we as a nation experienced a recession that stemmed from horribly evaluated housing loans. I remember during one of my last classes, an administrator came in to announce an emergency meeting for all students who had set up interviews for Bear Sterns & Co., the notable and long standing investment bank. The meeting was called to announce that is was completely under water and insolvent.
            </p>

            <p className="paragraph">
                Thankfully, my employment prospect was not affected. I would become a floor trader in Chicago for the next 10 years of my life. Towards the end of my first job as a trader, I had the pleasure of working with the IT staff to help optimize the front end trading software the traders used to execute trades. This place existed on the other side of the office space; not many traders ever needed or cared to venture that way for anything. The more I cycled from IT meetings and conversations of software design <span className="short">to</span> trading on their software activated something inside me. All I could think about was the details of the front-end design of the trading software.
            </p>
        </div>




        <style jsx>
            {`

            p {
                transition: color 1s linear;
                margin: 0;
                margin-bottom: 15px;
                color:${!isLongVersion && "yellow"};
            }
            .short {
                color: ${!isLongVersion && "red"};
                opacity: 1;
                left: ${!isLongVersion && "50px"};
                

            }
      
            .column-layout {
                column-count:3;
                padding-left: 10vw;
                padding-top: 100px;
                padding-right: 10vw;
               
            }
         

        `}</style></div >

}