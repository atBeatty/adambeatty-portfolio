import { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import ContactForm from '../components/ContactForm'


export default function About() {

    const [isLongVersion, setLongVersion] = useState(true)

    useEffect(() => {


    })

    const handleClick = () => setLongVersion(!isLongVersion)



    return <div className="about-wrapper">
        <NavBar></NavBar>
        {/* <ContactForm /> */}
        <header>
            <button className="long-version" onClick={handleClick}>LONG VERSION</button>
            <button className="short-version" onClick={handleClick}>SHORT VERSION</button>
        </header>


        <div className="column-layout">

            <p className="paragraph">
                My name is Adam Beatty and I am at where <span id="one" className="short">I</span> am at because I am trying my absolute hardest to find the one thing in life I <span id="two" className="short">love</span> to do. I graduated from Indiana University in the year 2008 with a degree in finance. For those who may need to be reminded, this was the year we as a nation experienced a recession that stemmed from horribly evaluated housing loans. I remember during one of my last classes, an administrator came in to announce an emergency meeting for all students who had set up interviews for Bear Sterns & Co., the notable and long standing investment bank. The meeting was called to announce that is was completely under water and insolvent.
            </p>

            <p className="paragraph">
                Thankfully, my employment prospect was not affected. I would become a floor trader in Chicago for the next 10 years of my life, making a decent life for myself. Towards the end of my first job as a trader, I had the pleasure of working with the IT staff to help optimize the front-end trading software the traders used to execute trades. This place existed on the other side of the office space; not many traders ever needed or cared to venture that way for anything. The more I cycled from IT meetings and conversations of software design <span id="three" className="short">to</span> trading on their software activated something inside me. All I could think about was the details of the <span className="short">front-end design</span> of the trading software.
            </p>

            <p className="paragraph">
                There was a point in time where I realized I couldn't take in new knowledge about the job I was executing daily. When I considered a change in career, the choice was easy to describe to people. I may not have not known my niche, but I knew I was happy when I was working creatively. Not to mention, I love computers so much. Someone once asked me when I was a junior at Indiana, 'have you interned for an investment bank before?' because I was hardly touching the mouse to navigate and command the computer programs that were running. Shortcuts are my north-star for work-flow, process, and quality of work.
            </p>
            <p className="paragraph">
                During my third year in the PSU Graphic Design school I signed up for a class Creative Coding. The rest is history, because this class acted as the catalyst for one last, monumental directional turn in my career choice. The pandemic came along and affected every living particle on this planet. I took a full term off from PSU and my current progress towards a BFA was on hold. In lieu of attending zoom classes at PSU, I opted to enroll in the full-time software engineer program at the Flatiron Academy. I wanted to <span id="four" className="short">code</span>.
            </p>
        </div>

        <div className="contact">

            ADAMBEATTY86@GMAIL.COM
        </div>



        <style jsx>
            {`
            header button{
                width:100vw;
                margin-left:auto;
                margin-right: auto;
            }
            p {
                line-height: 18px;
                margin: 0;
                font-weight: 300;
                margin-bottom: 15px;
                color:${!isLongVersion && "yellow"};
                
                
                transition: all 1s ease-out;
            }
            
            .short {
                
                font-size: ${!isLongVersion && "18px"};
                color: ${!isLongVersion && "red"};
                font-weight: ${!isLongVersion && "400"};
                transition: all 1s ease-out;

            }
            
      
            button {
                text-align:center;
                width:auto;
                font-size:20px;
                font-weight: 900;
       
            }
            .long-version {
                opacity:${!isLongVersion && ".2"};
            }
            .short-version {
                opacity:${isLongVersion && ".2"};
            }
      
            .column-layout {
                column-count:3;
                padding-left: 10vw;
                padding-top: 100px;
                padding-right: 10vw;
               
            }
            .contact {
                margin-top: 200px;
                margin-bottom: 200px;
                text-align:center;
            }

            @media screen and (max-width: 600px) {
                p {
                    font-size:${!isLongVersion && "0px"};
                    transition-delay: 1s;

                }
                .column-layout {
                    column-count:unset;
                }
            }
         

        `}</style></div >

}